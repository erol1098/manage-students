'use client';

import Image from 'next/image';

import styles from './Sidebar.module.scss';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove('token');
    router.push('/login');
  };

  return (
    <div className={styles['sidebar__logout']} onClick={handleLogout}>
      <p>Logout</p>
      <Image
        src='/assets/icons/sign-out-alt.svg'
        alt='logout'
        width={20}
        height={20}
      />
    </div>
  );
};

export default LogoutButton;
