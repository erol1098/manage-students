import styles from './Login.module.scss';

import FormHeading from './FormHeading';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <section className={styles.container}>
      <FormHeading />
      <LoginForm />
    </section>
  );
};

export default LoginPage;
