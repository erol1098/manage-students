import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import styles from './page.module.css';

import Dashboard from '@/components/Dashboard';

const DashboardPage = () => {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if (!token) {
    redirect('/login');
  }

  return (
    <main className={styles.main}>
      <Dashboard />
    </main>
  );
};

export default DashboardPage;
