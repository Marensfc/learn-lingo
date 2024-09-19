import css from './AppBar.module.css';
import icons from '../../assets/icons.svg';
import { Link } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';
import LoginModal from '../login-modal/LoginModal';
import RegisterModal from '../register-modal/RegisterModal';

const AppBar = () => {
  const loginModal = useModal();
  const registerModal = useModal();

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
          <button
            type="button"
            className={css.loginButton}
            onClick={() => loginModal.openModal()}
          >
            <svg width="20" height="20" className={css.loginIcon}>
              <use href={`${icons}#log-in`}></use>
            </svg>{' '}
            Log in
          </button>
          <button
            type="button"
            className={css.registrationButton}
            onClick={() => registerModal.openModal()}
          >
            Registration
          </button>
        </div>
      </div>
      <LoginModal
        isOpen={loginModal.isOpen}
        closeModal={loginModal.closeModal}
      />
      <RegisterModal
        isOpen={registerModal.isOpen}
        closeModal={registerModal.closeModal}
      />
    </header>
  );
};

export default AppBar;
