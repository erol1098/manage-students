'use client';

import useSWR from 'swr';

import styles from './StudentsTable.module.scss';

import StudentsTableRow from './StudentsTableRow';
import Image from 'next/image';
import { useState } from 'react';

const StudentsTable = () => {
  const [limit, setLimit] = useState(6);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/users?limit=${limit}&skip=${skip}`,
    fetcher
  );

  console.log('data', data);

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
        <>
          <ul className={styles['students-table']}>
            {data.users.map((user: any) => (
              <StudentsTableRow key={user.id} user={user} />
            ))}
          </ul>
          <div className={styles['students-table__pagination']}>
            <div>
              <label htmlFor='skip'>Rows per page:</label>
              <select
                id='skip'
                name='skip'
                value={limit}
                onChange={(e) => {
                  setLimit(parseInt(e.target.value));
                }}
              >
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
              </select>
            </div>
            <div>
              <p>
                {skip + 1}-{skip + limit > 100 ? 100 : skip + limit} of{' '}
                {data.total}
              </p>
              <Image
                src='/assets/icons/arrow-left.svg'
                alt='arrow-left'
                width={24}
                height={24}
                style={{ marginRight: '12px' }}
                onClick={() => {
                  skip - limit < 0 ? setSkip(0) : setSkip(skip - limit);
                }}
              />
              <Image
                src='/assets/icons/arrow-right.svg'
                alt='arrow-right'
                width={24}
                height={24}
                onClick={() => {
                  skip + limit > 100 ? setSkip(100) : setSkip(skip + limit);
                }}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default StudentsTable;
