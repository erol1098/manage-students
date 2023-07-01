import Image from 'next/image';

import styles from './StudentsTable.module.scss';

const StudentsTableRow = ({ user }: any) => {
  const userOverview = {
    avatar: user.image,
    name: `${user.firstName} ${user.lastName}`,
    email: user.email,
    phone: user.phone,
    website: user.domain,
    companyName: user.company.name,
  };
  return (
    <li className={styles['students-table__row']}>
      <Image
        src={userOverview.avatar}
        alt={userOverview.name}
        width={64}
        height={55}
      />
      <p>{userOverview.name}</p>
      <p>{userOverview.email}</p>
      <p>{userOverview.phone}</p>
      <p>{userOverview.website}</p>
      <p>{userOverview.companyName}</p>
      <div>
        <Image src='/assets/icons/pen.svg' alt='edit' width={18} height={18} />
        <Image
          src='/assets/icons/trash.svg'
          alt='delete'
          width={16}
          height={16}
        />
      </div>
    </li>
  );
};

export default StudentsTableRow;
