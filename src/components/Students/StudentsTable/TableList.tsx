import styles from './StudentsTable.module.scss';

import StudentsTableRow from './StudentsTableRow';

const TableList = ({ response }: any) => {
  const users = response.users ? response.users : [];

  return (
    <ul className={styles['students-table']}>
      {users.map((user: any) => (
        <StudentsTableRow key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default TableList;
