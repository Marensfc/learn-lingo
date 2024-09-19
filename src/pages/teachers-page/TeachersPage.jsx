import css from './TeachersPage.module.css';
import FiltersForm from '../../components/filters-form/FiltersForm';
import TeachersList from '../../components/teachers-list/TeachersList';
import setBodyBgColor from '../../utils/setBodyColor';
import BookLessonModal from '../../components/book-lesson-modal/BookLessonModal';
import { useModal } from '../../hooks/useModal';

const TeacherPage = () => {
  setBodyBgColor('#f8f8f8');
  const bookLessonModal = useModal();

  return (
    <>
      <section className={css.teachers}>
        <div className="container">
          <button type="button" onClick={() => bookLessonModal.openModal()}>
            Open book form
          </button>
          <FiltersForm />
          <TeachersList />
          <BookLessonModal
            isOpen={bookLessonModal.isOpen}
            closeModal={bookLessonModal.closeModal}
          />
        </div>
      </section>
    </>
  );
};

export default TeacherPage;
