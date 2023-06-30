'use client';

import { MouseEvent } from 'react';

import Image from 'next/image';

interface SidebarLinkItemProps {
  iconURL: string;
  name: string;
}

const SidebarLinkItem = ({ iconURL, name }: SidebarLinkItemProps) => {
  const handleClick = (event: MouseEvent<HTMLLIElement>) => {
    const sidebarItems = document.querySelectorAll<HTMLLIElement>(
      'li[id^="sidebar-item-"]'
    );

    sidebarItems.forEach((item) => {
      if (item.id !== event.currentTarget.id) {
        item.style.backgroundColor = 'transparent';
      } else {
        item.style.backgroundColor = '#FEAF00';
      }
    });
  };

  return (
    <li id={`sidebar-item-${name}`} onClick={handleClick}>
      <Image src={iconURL} alt={name} width={20} height={20} />
      <p>{name}</p>
    </li>
  );
};

export default SidebarLinkItem;
