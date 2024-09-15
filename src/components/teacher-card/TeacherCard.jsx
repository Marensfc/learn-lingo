import css from './TeacherCard.module.css';
import icons from '../../assets/icons.svg';

const TeacherCard = () => {
  return (
    <li className={css.teacherCard}>
      <div className={css.teacherAvatarThumb}>
        <img
          src="https://ftp.goit.study/img/avatars/2.jpg"
          alt="Teacher's avatar"
        />
      </div>
      <div className={css.cardContentWrapper}>
        <button className={css.cardAddToFavoritesBtn} type="button">
          <svg width={26} height={26} className={`${css.favoritesIcon}`}>
            <use href={`${icons}#heart`}></use>
          </svg>
        </button>
        <div className={css.cardInfo_StatisticsWrapper}>
          <p className={css.info_StatisticFieldOfStudy}>Languages</p>
          <div className={css.cardInfoStatistics}>
            <p className={css.info_StatisticsLessonsFormat}>
              <svg width={16} height={16} className={css.bookIcon}>
                <use href={`${icons}#book-open`}></use>
              </svg>
              Lessons online
            </p>
            <p className={css.info_StatisticsLessonsCount}>
              Lessons done: 1098
            </p>
            <p className={css.info_StatisticsRating}>
              <svg width={16} height={16}>
                <use href={`${icons}#rating-star`}></use>
              </svg>
              Rating: 4.8
            </p>
            <p className={css.info_StatisticsPrice}>
              Price / 1 hour: <span>30$</span>
            </p>
          </div>
        </div>
        <h3 className={css.cardTeacherName}>Jane Smith</h3>
        <p className={css.cardSpokenLanguages}>
          Speaks: <span>German, French</span>
        </p>
        <p className={css.cardLessonInfo}>
          Lesson info:{' '}
          <span>
            Lessons are structured to cover grammar, vocabulary, and practical
            usage of the language.
          </span>
        </p>
        <p className={css.cardConditions}>
          Conditions:{' '}
          <span>
            Welcomes both adult learners and teenagers (13 years and
            above).Provides personalized study plans
          </span>
        </p>
        <button type="button" className={css.cardBtnReadMore}>
          Read more
        </button>
        <div className={css.cardLevels}>
          <p className={css.cardLevel}>#A1 Beginner</p>
          <p className={css.cardLevel}>#A2 Elementary</p>
          <p className={css.cardLevel}>#B1 Intermediate</p>
          <p className={css.cardLevel}>#B2 Upper-Intermediate</p>
        </div>
      </div>
    </li>
  );
};

export default TeacherCard;
