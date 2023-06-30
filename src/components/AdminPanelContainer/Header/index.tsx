import Image from 'next/image';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <section className={styles.container}>
      <Image
        src='/assets/icons/caret-circle-down.svg'
        alt='go to back'
        width={18}
        height={18}
      />
      <Image src='/assets/icons/bell.svg' alt='alert' width={18} height={18} />
    </section>
  );
};

export default Header;
