import Image from 'next/image';

import styles from './StudentsTable.module.scss';

const TableLoader = () => {
  return (
    <div className={styles['students-table__loader']}>
      <Image
        src='/assets/icons/spinner.svg'
        alt='loader'
        width={50}
        height={50}
      />
    </div>
  );
};

export default TableLoader;
