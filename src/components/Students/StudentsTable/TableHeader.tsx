import styles from './StudentsTable.module.scss';

const TableHeader = () => {
  return (
    <div className={styles['students-table__header']}>
      <p></p>
      <p>Name</p>
      <p>Email</p>
      <p>Phone</p>
      <p>Website</p>
      <p>Company Name</p>
      <p></p>
    </div>
  );
};

export default TableHeader;
