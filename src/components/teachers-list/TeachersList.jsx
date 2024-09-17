import css from './TeachersList.module.css';

import TeacherCard from '../teacher-card/TeacherCard';
import LoadMoreBtn from '../load-more-btn/LoadMoreBtn';
import Loader from '../loader/Loader/Loader';

import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTeachers } from '../../redux/teachers/operations';
import { useSelector } from 'react-redux';
import {
  selectTeachers,
  selectIsLoading,
} from '../../redux/teachers/selectors';
import { calculatePaginationParams } from '../../utils/calculatePaginationParams';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TeachersList = () => {
  const dispatch = useDispatch();

  const teachers = useSelector(selectTeachers) || [];
  const isLoading = useSelector(selectIsLoading);

  const [showBtn, setShowBtn] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 4;
  const totalPages = useRef();
  const teachersListRef = useRef();

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

  return (
    <>
      {teachers.length !== 0 && (
        <ul className={css.teacherList} ref={teachersListRef}>
          {teachers.length !== 0 &&
            teachers.map((teacher, index) => {
              return (
                <TeacherCard
                  key={index}
                  avatar_url={teacher.avatar_url}
                  conditions={teacher.conditions}
                  experience={teacher.experience}
                  languages={teacher.languages}
                  lesson_info={teacher.lesson_info}
                  lessons_done={teacher.lessons_done}
                  levels={teacher.levels}
                  fullName={`${teacher.name} ${teacher.surname}`}
                  price_per_hour={teacher.price_per_hour}
                  rating={teacher.rating}
                  reviews={teacher.reviews}
                />
              );
            })}
        </ul>
      )}
      {isLoading && <Loader />}
      {showBtn && (
        <LoadMoreBtn increasePageFunction={() => setPage(page + 1)} />
      )}
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

export default TeachersList;
