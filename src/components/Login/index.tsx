import FormHeading from './FormHeading';
import styles from './Login.module.scss';

const LoginPage = () => {
  return (
    <section className={styles.container}>
      <FormHeading />
      <form className={styles.form}>
        <div className={styles['form-input']}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email'
          />
        </div>

        <div className={styles['form-input']}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Enter your password'
          />
        </div>

        <button type='submit'>Sign In</button>
        <p>
          Forgot your password? <span>Reset Password</span>
        </p>
      </form>
    </section>
  );
};

export default LoginPage;
