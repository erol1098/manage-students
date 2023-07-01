'use client';

import useSWR from 'swr';

import styles from './StudentsTable.module.scss';

import StudentsTableRow from './StudentsTableRow';

const StudentsTable = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    'https://dummyjson.com/users',
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

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
      <ul className={styles['students-table']}>
        {data.users.map((user: any) => (
          <StudentsTableRow key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
};

export default StudentsTable;
