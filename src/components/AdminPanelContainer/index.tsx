import styles from './AdminPanelContainer.module.scss';

import Header from './Header';
import Sidebar from './Sidebar';

const AdminPanelContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={styles.container}>
      <Sidebar />
      <div>
        <Header />
        {children}
      </div>
    </section>
  );
};

export default AdminPanelContainer;
