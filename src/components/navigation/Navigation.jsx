import css from './Navigation.module.css';
import { Link } from 'react-router-dom';

const Navigation = ({ isLoggedIn }) => {
  return (
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
        {isLoggedIn && (
          <li>
            <Link to="/favorites" className={css.headerNavLink}>
              Favorites
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
