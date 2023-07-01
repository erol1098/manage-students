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
  return (
    <div className={styles['students-table__pagination']}>
      <div className={styles['students-table__pagination--limit']}>
        <label htmlFor='limit'>Rows per page:</label>
        <select
          id='limit'
          name='limit'
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
      <div className={styles['students-table__pagination--buttons']}>
        <p>
          {skip + 1}-{skip + limit > 100 ? 100 : skip + limit} of {total}
        </p>
        <Image
          src='/assets/icons/arrow-left.svg'
          alt='arrow-left'
          width={24}
          height={24}
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
  );
};

export default TablePagination;
