'use client';

import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

import styles from './page.module.css';

export default function Home() {
  const isLoggedIn = Cookies.get('token');
  const router = useRouter();

  if (isLoggedIn) {
    router.push('/dashboard');
  } else {
    router.push('/login');
  }

  return <main className={styles.main}></main>;
}
