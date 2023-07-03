import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import styles from './page.module.css';
import Students from '@/components/Students';

import { Providers } from '@/redux/provider';

const StudentsPage = () => {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if (!token) {
    redirect('/login');
  }
  return (
    <main className={styles.main}>
      <Providers>
        <Students />
      </Providers>
    </main>
  );
};

export default StudentsPage;
