import Image from 'next/image';
import styles from './Sidebar.module.scss';

const SidebarAvatar = () => {
  return (
    <div className={styles['sidebar__avatar']}>
      <Image
        src='/assets/images/avatar.png'
        alt='Avatar'
        width={120}
        height={120}
      />
      <h2>John Doe</h2>
      <p>Admin</p>
    </div>
  );
};

export default SidebarAvatar;
