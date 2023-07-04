import Image from 'next/image';

import styles from '../StudentsTable.module.scss';
import TableRowButtonsContainer from './TableRowButtonsContainer';

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
        placeholder='blur'
        blurDataURL='/assets/icons/spinner.svg'
      />
      <p>{userOverview.name}</p>
      <p>{userOverview.email}</p>
      <p>{userOverview.phone}</p>
      <p>{userOverview.website}</p>
      <p>{userOverview.companyName}</p>
      <TableRowButtonsContainer student={user} />
    </li>
  );
};

export default StudentsTableRow;
