import styles from './SidebarLinks.module.scss';

import SidebarLinkItem from './SidebarLinkItem';

import { sidebarLinks } from './sidebar-links';

const SidebarLinks = () => {
  return (
    <ul className={styles.container}>
      {sidebarLinks.map(({ id, iconURL, name }) => (
        <SidebarLinkItem key={id} iconURL={iconURL} name={name} />
      ))}
    </ul>
  );
};

export default SidebarLinks;
