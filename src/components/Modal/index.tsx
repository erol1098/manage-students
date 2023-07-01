import styles from './Modal.module.scss';

const Modal = ({ children }: { children: React.ReactNode }) => {
  return <section className={styles.modal}>{children}</section>;
};

export default Modal;
