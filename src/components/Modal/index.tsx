import styles from './Modal.module.scss';

interface ModalProps {
  setOpenModal: (openModal: boolean) => void;
  children: React.ReactNode;
}

const Modal = ({ setOpenModal, children }: ModalProps) => {
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setOpenModal(false);
    }
  };

  return (
    <section className={styles.modal} onClick={handleModalClick}>
      <div>{children}</div>
    </section>
  );
};

export default Modal;
