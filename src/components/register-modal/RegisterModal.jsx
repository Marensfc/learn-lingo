import BaseModal from '../base-modal/BaseModal';
import RegisterForm from '../register-form/RegisterForm';

const RegisterModal = ({ isOpen, closeModal }) => {
  return (
    <BaseModal
      isOpen={isOpen}
      closeModal={closeModal}
      styles={{ content: { maxWidth: '566px' } }}
    >
      <RegisterForm />
    </BaseModal>
  );
};

export default RegisterModal;
