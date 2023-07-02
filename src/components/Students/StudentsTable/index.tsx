'use client';
import { useState } from 'react';

import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';

import TableHeader from './TableHeader';
import TableLoader from './TableLoader';
import TableList from './TableList';
import TablePagination from './TablePagination';

const StudentsTable = () => {
  const searchParams = useSearchParams();

  const searchQuery = searchParams.get('search');
  const requestLimit = searchParams.get('limit');
  const requestSkip = searchParams.get('skip');

  const [limit, setLimit] = useState(requestLimit ? parseInt(requestLimit) : 6);
  const [skip, setSkip] = useState(requestSkip ? parseInt(requestSkip) : 0);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const url = searchQuery
    ? `https://dummyjson.com/users/search?q=${searchQuery}&limit=${
        requestLimit ? requestLimit : 6
      }&skip=${requestSkip ? requestSkip : 0}`
    : `https://dummyjson.com/users?limit=${
        requestLimit ? requestLimit : 6
      }&skip=${requestSkip ? requestSkip : 0}`;

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
