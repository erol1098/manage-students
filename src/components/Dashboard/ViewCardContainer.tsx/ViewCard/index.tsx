import Image from 'next/image';
import styles from './ViewCard.module.scss';

interface ViewCardProps {
  icon: string;
  title: string;
  value: string | number;
  backgroundColor: string;
}

const ViewCard = ({ icon, title, value, backgroundColor }: ViewCardProps) => {
  const svg = icon;
  const blob = new Blob([svg], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);

  return (
    <div
      className={styles.container}
      style={{
        background: backgroundColor,
      }}
    >
      <div>
        <Image src={url} alt={title} width={40} height={40} />

        <p>{title}</p>
      </div>
      <div>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default ViewCard;
