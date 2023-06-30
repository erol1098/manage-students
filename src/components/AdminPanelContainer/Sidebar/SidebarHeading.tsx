import styles from './Sidebar.module.scss';

const SidebarHeading = () => {
  return (
    <div className={styles['sidebar__heading']}>
      <span></span>
      <h1>Manage Courses</h1>
    </div>
  );
};

export default SidebarHeading;
