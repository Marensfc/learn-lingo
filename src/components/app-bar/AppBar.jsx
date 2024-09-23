import css from './AppBar.module.css';
import icons from '../../assets/icons.svg';
import AuthMenu from '../auth-menu/AuthMenu';
import UserMenu from '../user-menu/UserMenu';
import Navigation from '../navigation/Navigation';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <div className={`container ${css.headerContainer}`}>
        <a href="/" className={css.logoLink}>
          <svg width="28" height="28">
            <use href={`${icons}#ukraine-logo`}></use>
          </svg>
          Learn Lingo
        </a>
        <Navigation isLoggedIn={isLoggedIn} />
        {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      </div>
    </header>
  );
};

export default AppBar;
