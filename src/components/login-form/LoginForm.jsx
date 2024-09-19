import css from './LoginForm.module.css';
import icons from '../../assets/icons.svg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import clsx from 'clsx';

const loginSchema = yup.object().shape({
  email: yup
    .string('Email should be a string')
    .required('Email is a required field')
    .email('Email should be valid')
    .test('isValidAfterSign', function (email) {
      const strAfterEmailSign = email.slice(email.indexOf('@'));
      return (
        !strAfterEmailSign.includes('@') || strAfterEmailSign.includes('.')
      );
    }),
  password: yup
    .string('Password should be a string')
    .required('Password is a required field')
    .trim()
    .min(6, 'Password should have at least 6 characters')
    .max(28, 'Password should have at most 28 characters'),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = data => console.log(data);

  return (
    <>
      <p className={css.modalTitle}>Log In</p>
      <p className={css.hintText}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={css.loginForm}>
        <input
          type="email"
          {...register('email')}
          className={clsx({
            [css.emailInput]: true,
            [css.emailInputHasError]: errors.email,
          })}
          placeholder="Email"
        />
        {errors.email && (
          <span className={css.emailErrorMessage}>{errors.email.message}</span>
        )}
        <div
          className={clsx({
            [css.passwordInputWrapper]: true,
            [css.passwordInputWrapperWithError]: errors.password,
          })}
        >
          <input
            type="password"
            {...register('password')}
            className={clsx({
              [css.passwordInput]: true,
              [css.passwordInputHasError]: errors.password,
            })}
            placeholder="Password"
          />
          <button type="button" className={css.togglePwdVisibilityBtn}>
            <svg width={20} height={20} className={css.eyeIcon}>
              <use href={`${icons}#icon-eye-off`}></use>
            </svg>
          </button>
        </div>
        {errors.password && (
          <span className={css.passwordErrorMessage}>
            {errors.password.message}
          </span>
        )}
        <button type="sumbit" className={css.btnSubmit}>
          Log In
        </button>
      </form>
    </>
  );
};

export default LoginForm;
