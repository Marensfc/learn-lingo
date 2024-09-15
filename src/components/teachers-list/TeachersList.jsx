import css from './TeachersList.module.css';
import TeacherCard from '../teacher-card/TeacherCard';
import LoadMoreBtn from '../load-more-btn/LoadMoreBtn';

const TeachersList = () => {
  return (
    <>
      <ul className={css.teacherList}>
        <TeacherCard />
      </ul>
      <LoadMoreBtn />
    </>
  );
};

export default TeachersList;
