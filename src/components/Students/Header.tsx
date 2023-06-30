import Image from 'next/image';
import styles from './Students.module.scss';

const Header = () => {
  return (
    <div className={styles['students__header']}>
      <p>Students List</p>
      <div>
        <label>
          <input type='text' placeholder='Search...' />
          <Image
            src='/assets/icons/search.svg'
            alt='search'
            width={16}
            height={16}
          />
        </label>
        <button>ADD NEW STUDENT</button>
      </div>
    </div>
  );
};

export default Header;
