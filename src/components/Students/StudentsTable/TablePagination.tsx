import { useEffect } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

import styles from './StudentsTable.module.scss';

interface TablePaginationProps {
  limit: number;
  setLimit: (limit: number) => void;
  skip: number;
  setSkip: (skip: number) => void;
  total: number;
}

const TablePagination = ({
  limit,
  setLimit,
  skip,
  setSkip,
  total,
}: TablePaginationProps) => {
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    setSkip(params.get('skip') ? parseInt(params.get('skip')!) : 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  const changeLimit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(parseInt(e.target.value));

    const searchParams = new URLSearchParams(params.toString());
    searchParams.set('limit', e.target.value);
    router.push(`?${searchParams.toString()}`);
  };

  const goPreviousPage = () => {
    if (skip === 0) return;

    skip - limit < 0 ? setSkip(0) : setSkip(skip - limit);

    const searchParams = new URLSearchParams(params.toString());
    searchParams.set('skip', (skip - limit < 0 ? 0 : skip - limit).toString());
    router.push(`?${searchParams.toString()}`);
  };

  const goNextPage = () => {
    if (skip + limit >= total) return;

    skip + limit > total ? setSkip(total) : setSkip(skip + limit);

    const searchParams = new URLSearchParams(params.toString());
    searchParams.set(
      'skip',
      (skip + limit > total ? total : skip + limit).toString()
    );
    router.push(`?${searchParams.toString()}`);
  };

  return (
    <div className={styles['students-table__pagination']}>
      <div className={styles['students-table__pagination--limit']}>
        <label htmlFor='limit'>Rows per page:</label>
        <select id='limit' name='limit' value={limit} onChange={changeLimit}>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
        </select>
      </div>
      <div className={styles['students-table__pagination--buttons']}>
        <p>
          {skip + 1}-{skip + limit > total ? total : skip + limit} of {total}
        </p>
        <Image
          src='/assets/icons/arrow-left.svg'
          alt='arrow-left'
          width={24}
          height={24}
          onClick={goPreviousPage}
        />
        <Image
          src='/assets/icons/arrow-right.svg'
          alt='arrow-right'
          width={24}
          height={24}
          onClick={goNextPage}
        />
      </div>
    </div>
  );
};

export default TablePagination;
