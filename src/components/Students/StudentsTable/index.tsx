'use client';
import { useState } from 'react';

import useSWR from 'swr';

import TableHeader from './TableHeader';
import TableLoader from './TableLoader';
import TableList from './TableList';
import TablePagination from './TablePagination';

const StudentsTable = () => {
  const [limit, setLimit] = useState(6);
  const [skip, setSkip] = useState(0);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, isLoading } = useSWR(
    `https://dummyjson.com/users?limit=${limit}&skip=${skip}`,
    fetcher
  );

  return (
    <>
      <TableHeader />
      {isLoading ? (
        <TableLoader />
      ) : (
        <>
          <TableList response={data} />
          <TablePagination
            limit={limit}
            setLimit={setLimit}
            skip={skip}
            setSkip={setSkip}
            total={data.total}
          />
        </>
      )}
    </>
  );
};

export default StudentsTable;
