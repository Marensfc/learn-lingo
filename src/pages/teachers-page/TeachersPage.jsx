import css from './TeachersPage.module.css';

import FiltersForm from '../../components/filters-form/FiltersForm';
import TeachersList from '../../components/teachers-list/TeachersList';
import BookLessonModal from '../../components/book-lesson-modal/BookLessonModal';
import Loader from '../../components/loader/Loader';
import LoadMoreBtn from '../../components/load-more-btn/LoadMoreBtn';

import { useRef, useState, useEffect } from 'react';
import { useModal } from '../../hooks/useModal';
import { calculatePaginationParams } from '../../utils/calculatePaginationParams';
import { setBodyBgColor } from '../../utils/setBodyColor';

import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachers } from '../../redux/teachers/operations';
import {
  selectTeachers,
  selectIsLoading,
} from '../../redux/teachers/selectors';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../../redux/auth/selectors';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../api/firebaseInit';
import {
  getUserFavoriteTeachers,
  updateFavoriteTeachersInFirebase,
} from '../../api/firebaseFunctions';

const TeacherPage = () => {
  setBodyBgColor('#f8f8f8');

  const dispatch = useDispatch();
  const bookLessonModal = useModal();
  const [chosenTeacher, setChosenTeacher] = useState(null);

  const teachers = useSelector(selectTeachers) || [];
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  const [showBtn, setShowBtn] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 4;
  const totalPages = useRef();

  useEffect(() => {
    setShowBtn(false);
    const load = async () => {
      try {
        if (page === 1) {
          const data = await dispatch(
            fetchTeachers(calculatePaginationParams(perPage, page))
          ).unwrap();

          if (data.items.length === 0) {
            toast.info(
              'Sorry, there are no records matching your search query. Please try again!'
            );
            return;
          }

          if (data.items.length < perPage || data.totalPages === 0) {
            toast.info(
              'Sorry, but you have reached the end of the search results'
            );
            return;
          }

          totalPages.current = data.totalPages;
          setShowBtn(true);
          return;
        }
        if (page > 1) {
          await dispatch(
            fetchTeachers(calculatePaginationParams(perPage, page))
          ).unwrap();

          totalPages.current -= 1;

          if (totalPages.current === 0) {
            toast.info(
              'Sorry, but you have reached the end of the search results'
            );
            return;
          }

          setShowBtn(true);
          return;
        }
      } catch (error) {
        toast.error(error.message);
        setShowBtn(false);
      }
    };
    load();
  }, [page, dispatch]);

  const [favoriteTeachers, setFavoriteTeachers] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) {
        const response = await getUserFavoriteTeachers(auth.currentUser.uid);
        setFavoriteTeachers(response);
      }
    });

    return () => unsubscribe();
  }, [isLoggedIn, isRefreshing]);

  const addTeacherToFavorite = async teacher => {
    const newList = [...favoriteTeachers, teacher];

    await updateFavoriteTeachersInFirebase(auth.currentUser.uid, newList);
    setFavoriteTeachers(newList);
  };

  const deleteTeacherFromFavorite = async id => {
    const newList = favoriteTeachers.filter(teacher => teacher._id !== id);

    if (newList.length === 0) {
      await updateFavoriteTeachersInFirebase(auth.currentUser.uid, ['empty']);
      setFavoriteTeachers(newList);
      return;
    }

    await updateFavoriteTeachersInFirebase(auth.currentUser.uid, newList);
    setFavoriteTeachers(newList);
  };

  const checkIsSelected = id => {
    if (isLoggedIn) {
      return Boolean(favoriteTeachers.find(teacher => teacher._id === id));
    } else return false;
  };

  return (
    <>
      <section className={css.teachers}>
        <div className="container">
          <FiltersForm />
          <TeachersList
            teachers={teachers}
            openModal={bookLessonModal.openModal}
            setChosenTeacher={setChosenTeacher}
            increasePage={() => setPage(page + 1)}
            showBtn={showBtn}
            addTeacher={addTeacherToFavorite}
            deleteTeacher={deleteTeacherFromFavorite}
            checkIsSelected={checkIsSelected}
            isLoading={isLoading}
          />
          {isLoading && <Loader />}
          {showBtn && (
            <LoadMoreBtn increasePageFunction={() => setPage(page + 1)} />
          )}
        </div>
      </section>
      <BookLessonModal
        isOpen={bookLessonModal.isOpen}
        closeModal={bookLessonModal.closeModal}
        teacherInfo={chosenTeacher}
      />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Slide
      />
    </>
  );
};

export default TeacherPage;
