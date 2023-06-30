import AdminPanelContainer from '../AdminPanelContainer';
import Header from './Header';
import StudentsTable from './StudentsTable';

const Students = () => {
  return (
    <AdminPanelContainer>
      <Header />
      <StudentsTable />
    </AdminPanelContainer>
  );
};

export default Students;
