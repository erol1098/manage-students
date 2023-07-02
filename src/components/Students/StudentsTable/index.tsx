'use client';
import { useState } from 'react';

import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';

import TableHeader from './TableHeader';
import TableLoader from './TableLoader';
import TableList from './TableList';
import TablePagination from './TablePagination';

const StudentsTable = () => {
  const [limit, setLimit] = useState(6);
  const [skip, setSkip] = useState(0);

  const searchParams = useSearchParams();

  //get search query from url
  const searchQuery = searchParams.get('search');

  console.log('first', searchQuery);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const url = searchQuery
    ? `https://dummyjson.com/users/search?q=${searchQuery}&limit=${limit}&skip=${skip}`
    : `https://dummyjson.com/users?limit=${limit}&skip=${skip}`;

  const { data, isLoading } = useSWR(url, fetcher);

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
