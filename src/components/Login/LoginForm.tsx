'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

import styles from './Login.module.scss';

import { LoginForm as LF } from './LoginFormClass';

const LoginForm = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginForm = new LF();

    const submitResult = loginForm.submitForm();

    setSubmitted(true);

    if (submitResult.isValidated) {
      Cookies.set('token', JSON.stringify(true));
      router.push('/dashboard');
    } else {
      setErrors(submitResult.values);
    }
  };

  const handleFormChange = () => {
    const loginForm = new LF();
    if (submitted) {
      const formErrors = loginForm.changeForm();
      setErrors(formErrors);
    }
  };

  return (
    <form
      id='login-form'
      className={styles.form}
      onSubmit={handleSubmit}
      onChange={handleFormChange}
    >
      <div className={styles['form-input']}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Enter your email'
        />
        <small>{errors.email}</small>
      </div>

      <div className={styles['form-input']}>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          placeholder='Enter your password'
        />
        <small>{errors.password}</small>
      </div>

      <button type='submit'>Sign In</button>
      <p>
        Forgot your password? <span>Reset Password</span>
      </p>
    </form>
  );
};

export default LoginForm;
