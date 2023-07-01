import styles from './Students.module.scss';

import AdminPanelContainer from '../AdminPanelContainer';
import Header from './Header';
import StudentsTable from './StudentsTable';

const Students = () => {
  return (
    <AdminPanelContainer>
      <div className={styles.students}>
        <Header />
        <StudentsTable />
      </div>
    </AdminPanelContainer>
  );
};

export default Students;
