'use client';

import { useState } from 'react';

import Image from 'next/image';
import styles from './Students.module.scss';
import StudentForm from './StudentForm';
import Modal from '../Modal';

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className={styles['students__header']}>
        <p>Students List</p>
        <div>
          <label>
            <input type='text' placeholder='Search...' />
            <Image
              src='/assets/icons/search.svg'
              alt='search'
              width={16}
              height={16}
            />
          </label>
          <button type='button' onClick={() => setOpenModal(true)}>
            ADD NEW STUDENT
          </button>
        </div>
      </div>
      {openModal && (
        <Modal>
          <StudentForm
            buttonName='Add Student'
            student={{
              id: '',
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              website: '',
              companyName: '',
            }}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}
    </>
  );
};

export default Header;
