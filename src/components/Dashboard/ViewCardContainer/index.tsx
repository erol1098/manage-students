import styles from './ViewCardContainer.module.scss';

import ViewCard from './ViewCard';
import { viewCards } from './view-cards';

const ViewCardContainer = () => {
  return (
    <section className={styles.container}>
      {viewCards.map(({ icon, title, value, backgroundColor }) => (
        <ViewCard
          key={title}
          icon={icon}
          title={title}
          value={value}
          backgroundColor={backgroundColor}
        />
      ))}
    </section>
  );
};

export default ViewCardContainer;
