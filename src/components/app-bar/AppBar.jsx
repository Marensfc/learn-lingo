import css from './AppBar.module.css';
import icons from '../../assets/icons.svg';
import { Link } from 'react-router-dom';

const AppBar = () => {
  return (
    <header className={css.header}>
      <div className={`container ${css.headerContainer}`}>
        <a href="/" className={css.logoLink}>
          <svg width="28" height="28">
            <use href={`${icons}#ukraine-logo`}></use>
          </svg>
          Learn Lingo
        </a>
        <nav>
          <ul className={css.headerNavList}>
            <li>
              <Link to="/" className={css.headerNavLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/teachers" className={css.headerNavLink}>
                Teachers
              </Link>
            </li>
          </ul>
        </nav>
        <div className={css.headerAuthButtons}>
          <button type="button" className={css.loginButton}>
            <svg width="20" height="20" className={css.loginIcon}>
              <use href={`${icons}#log-in`}></use>
            </svg>{' '}
            Log in
          </button>
          <button type="button" className={css.registrationButton}>
            Registration
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
