'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarLinkItemProps {
  iconURL: string;
  name: string;
  link: string;
}

const SidebarLinkItem = ({ iconURL, name, link }: SidebarLinkItemProps) => {
  const url = usePathname();

  return (
    <li
      style={{
        backgroundColor:
          url.replace('/', '') === name.toLowerCase() ||
          (url === '/dashboard' && name === 'Home')
            ? '#FEAF00'
            : 'transparent',
      }}
    >
      <Link href={link} passHref>
        <Image src={iconURL} alt={name} width={20} height={20} />
        <p>{name}</p>
      </Link>
    </li>
  );
};

export default SidebarLinkItem;
