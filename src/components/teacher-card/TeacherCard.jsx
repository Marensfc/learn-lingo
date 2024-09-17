import css from './TeacherCard.module.css';
import icons from '../../assets/icons.svg';

const TeacherCard = ({
  avatar_url,
  conditions,
  experience,
  languages,
  lesson_info,
  lessons_done,
  levels,
  fullName,
  price_per_hour,
  rating,
  reviews,
}) => {
  return (
    <li className={css.teacherCard}>
      <div className={css.teacherAvatarThumb}>
        <img src={avatar_url} alt="Teacher's avatar" />
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
              Lessons done: {lessons_done}
            </p>
            <p className={css.info_StatisticsRating}>
              <svg width={16} height={16}>
                <use href={`${icons}#rating-star`}></use>
              </svg>
              Rating: {rating}
            </p>
            <p className={css.info_StatisticsPrice}>
              Price / 1 hour: <span>{price_per_hour}$</span>
            </p>
          </div>
        </div>
        <h3 className={css.cardTeacherName}>{fullName}</h3>
        <p className={css.cardSpokenLanguages}>
          Speaks: <span>{languages.join(', ')}</span>
        </p>
        <p className={css.cardLessonInfo}>
          Lesson info: <span>{lesson_info}</span>
        </p>
        <p className={css.cardConditions}>
          Conditions: <span>{conditions.join(' ')}</span>
        </p>
        <button type="button" className={css.cardBtnReadMore}>
          Read more
        </button>
        <ul className={css.cardLevels}>
          {levels.map((level, index) => (
            <li key={index}>
              <p className={css.cardLevel}>#{level}</p>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default TeacherCard;
