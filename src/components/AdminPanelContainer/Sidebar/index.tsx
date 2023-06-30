import styles from './Sidebar.module.scss';

import SidebarHeading from './SidebarHeading';
import SidebarAvatar from './SidebarAvatar';
import SidebarLinks from './SidebarLinks';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <SidebarHeading />
      <SidebarAvatar />
      <SidebarLinks />
      <LogoutButton />
    </section>
  );
};

export default Sidebar;
