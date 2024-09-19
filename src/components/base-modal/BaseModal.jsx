import css from './BaseModal.module.css';
import Modal from 'react-modal';
import icons from '../../assets/icons.svg';

Modal.setAppElement('#root');

const BaseModal = ({ isOpen, closeModal, styles, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      // bodyOpenClassName={css.stopScrolling}
      className={css.modal}
      overlayClassName={css.overlay}
      style={styles}
    >
      <button
        type="button"
        className={css.closeModalBtn}
        onClick={() => closeModal()}
      >
        <svg width={32} height={32} className={css.closeModalIcon}>
          <use href={`${icons}#close-modal`}></use>
        </svg>
      </button>
      {children}
    </Modal>
  );
};

export default BaseModal;
