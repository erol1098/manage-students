import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import styles from './Dashboard.module.scss';

import DashboardSidebar from './Sidebar/DashboardSidebar';
import ViewCardContainer from './ViewCardContainer.tsx';

const Dashboard = () => {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if (!token) {
    redirect('/login');
  }

  return (
    <section className={styles.container}>
      <DashboardSidebar />
      <ViewCardContainer />
    </section>
  );
};

export default Dashboard;
