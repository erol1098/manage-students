import styles from './Login.module.scss';

const FormHeading = () => {
  return (
    <div className={styles['form-heading']}>
      <div className={styles.title}>
        <span></span>
        <h1>Manage Courses</h1>
      </div>
      <div>
        <h2>SIGN IN</h2>
        <p>Enter your credentials to access your account</p>
      </div>
    </div>
  );
};

export default FormHeading;
