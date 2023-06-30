import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import styles from './page.module.css';
import Students from '@/components/Students';

const StudentsPage = () => {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if (!token) {
    redirect('/login');
  }
  return (
    <main className={styles.main}>
      <Students />
    </main>
  );
};

export default StudentsPage;
