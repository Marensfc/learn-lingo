import css from './AuthMenu.module.css';
import icons from '../../assets/icons.svg';
import LoginModal from '../login-modal/LoginModal';
import RegisterModal from '../register-modal/RegisterModal';

import { useModal } from '../../hooks/useModal';

const AuthMenu = () => {
  const loginModal = useModal();
  const registerModal = useModal();

  return (
    <div className={css.headerAuthButtons}>
      <button
        type="button"
        className={css.loginButton}
        onClick={() => loginModal.openModal()}
      >
        <svg width="20" height="20">
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
      <LoginModal
        isOpen={loginModal.isOpen}
        closeModal={loginModal.closeModal}
      />
      <RegisterModal
        isOpen={registerModal.isOpen}
        closeModal={registerModal.closeModal}
      />
    </div>
  );
};

export default AuthMenu;
