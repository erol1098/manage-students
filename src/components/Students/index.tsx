import styles from './Students.module.scss';

import AdminPanelContainer from '../AdminPanelContainer';
import StudentsTable from './StudentsTable';
import StudentsHeader from './StudentsHeader';

const Students = () => {
  return (
    <AdminPanelContainer>
      <div className={styles.students}>
        <StudentsHeader />
        <StudentsTable />
      </div>
    </AdminPanelContainer>
  );
};

export default Students;
