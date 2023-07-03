import styles from './StudentsTable.module.scss';

import StudentsTableRow from './StudentsTableRow';

const TableList = ({ response }: any) => {
  return (
    <ul className={styles['students-table']}>
      {response.map((user: any) => (
        <StudentsTableRow key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default TableList;
