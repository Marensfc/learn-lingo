import css from './FiltersForm.module.css';
import { useId } from 'react';

const FiltersForm = () => {
  const fieldLanguagesId = useId();
  const fieldLevelsId = useId();
  const fieldPriceId = useId();

  return (
    <form className={css.filtersForm}>
      <div className={css.formFieldWrapper}>
        <label htmlFor={fieldLanguagesId} className={css.label}>
          Languages
        </label>
        <select
          name="language"
          id={fieldLanguagesId}
          className={css.selectLanguage}
        >
          <option value="french">French</option>
          <option value="english">English</option>
          <option value="german">German</option>
          <option value="ukrainian">Ukrainian</option>
          <option value="polish">Polish</option>
          <option value="spanish">Spanish</option>
          <option value="mandarin chinese">Mandarin Chinese</option>
          <option value="italian">Italian</option>
          <option value="korean">Korean</option>
        </select>
      </div>
      <div className={css.formFieldWrapper}>
        <label htmlFor={fieldLevelsId} className={css.label}>
          Level of knowledge
        </label>
        <select name="level" id={fieldLevelsId} className={css.selectLevel}>
          <option value="a1">A1 Beginner</option>
          <option value="a2">A2 Elementary</option>
          <option value="b1">B1 Intermediate</option>
          <option value="b2">B2 Upper-Intermediate</option>
          <option value="c1">C1 Advanced</option>
          <option value="c2">C2 Proficiency</option>
        </select>
      </div>
      <div className={css.formFieldWrapper}>
        <label htmlFor={fieldPriceId} className={css.label}>
          Price
        </label>
        <select
          name="price"
          id={fieldPriceId}
          className={css.selectPrice}
          defaultValue={30}
        >
          <option value="10">10 $</option>
          <option value="20">20 $</option>
          <option value="30">30 $</option>
          <option value="40">40 $</option>
          <option value="50">50 $</option>
        </select>
      </div>
    </form>
  );
};

export default FiltersForm;
