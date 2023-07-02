'use client';

import { useState } from 'react';

import styles from './StudentsHeader.module.scss';

import Modal from '@/components/Modal';
import StudentForm from '../StudentForm';
import StudentsHeaderSearch from './StudentsHeaderSearch';

const StudentsHeader = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className={styles['students__header']}>
        <p>Students List</p>
        <div>
          <StudentsHeaderSearch />
          <button type='button' onClick={() => setOpenModal(true)}>
            ADD NEW STUDENT
          </button>
        </div>
      </div>
      {openModal && (
        <Modal setOpenModal={setOpenModal}>
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

export default StudentsHeader;
