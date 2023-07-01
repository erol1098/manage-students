'use client';

import useSWR from 'swr';

import styles from './StudentsTable.module.scss';

import StudentsTableRow from './StudentsTableRow';
import Image from 'next/image';

const StudentsTable = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    'https://dummyjson.com/users',
    fetcher
  );

  return (
    <>
      <div className={styles['students-table__header']}>
        <p></p>
        <p>Name</p>
        <p>Email</p>
        <p>Phone</p>
        <p>Website</p>
        <p>Company Name</p>
        <p></p>
      </div>
      {isLoading ? (
        <div className={styles['students-table__loader']}>
          <Image
            src='/assets/icons/spinner.svg'
            alt='loader'
            width={50}
            height={50}
          />
        </div>
      ) : (
        <ul className={styles['students-table']}>
          {data.users.map((user: any) => (
            <StudentsTableRow key={user.id} user={user} />
          ))}
        </ul>
      )}
    </>
  );
};

export default StudentsTable;
