import styles from './page.module.css';

import LoginPage from '@/components/Login';

const Login = () => {
  return (
    <main className={styles.main}>
      <LoginPage />
    </main>
  );
};

export default Login;
