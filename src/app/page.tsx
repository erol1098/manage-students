import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import styles from './page.module.css';

export default function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if (!token) {
    redirect('/login');
  }

  return <main className={styles.main}></main>;
}
