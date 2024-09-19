import css from './TeachersPage.module.css';
import FiltersForm from '../../components/filters-form/FiltersForm';
import TeachersList from '../../components/teachers-list/TeachersList';
import setBodyBgColor from '../../utils/setBodyColor';

const TeacherPage = () => {
  setBodyBgColor('#f8f8f8');

  return (
    <>
      <section className={css.teachers}>
        <div className="container">
          <FiltersForm />
          <TeachersList />
        </div>
      </section>
    </>
  );
};

export default TeacherPage;
