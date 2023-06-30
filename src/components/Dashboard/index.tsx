import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import styles from './Dashboard.module.scss';

import DashboardSidebar from './Sidebar/DashboardSidebar';
import ViewCardContainer from './ViewCardContainer.tsx';
import Header from './Header';

const Dashboard = () => {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if (!token) {
    redirect('/login');
  }

  return (
    <section className={styles.container}>
      <DashboardSidebar />
      <div>
        <Header />
        <ViewCardContainer />
      </div>
    </section>
  );
};

export default Dashboard;
