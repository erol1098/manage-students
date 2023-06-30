import styles from './page.module.css';

import Dashboard from '@/components/Dashboard';

const DashboardPage = () => {
  return (
    <main className={styles.main}>
      <Dashboard />
    </main>
  );
};

export default DashboardPage;
