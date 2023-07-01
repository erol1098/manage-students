import { useState } from 'react';
import Image from 'next/image';

import axios from 'axios';
import Modal from '@/components/Modal';
import StudentForm from '../../StudentForm';

const TableRowButtonsContainer = ({ student }: any) => {
  const [openModal, setOpenModal] = useState(false);

  const handleDeleteUser = (userId: number) => {
    axios.delete(`https://dummyjson.com/users/${userId}`).then((res) => {
      console.log('deleted user', res.data);
    });
  };

  return (
    <>
      <div>
        <Image
          src='/assets/icons/pen.svg'
          alt='edit'
          width={16}
          height={16}
          onClick={() => setOpenModal(true)}
        />
        <Image
          src='/assets/icons/trash.svg'
          alt='delete'
          width={16}
          height={16}
          onClick={() => handleDeleteUser(student.id)}
        />
      </div>
      {openModal && (
        <Modal>
          <StudentForm student={student} buttonName='Update Student' />
        </Modal>
      )}
    </>
  );
};

export default TableRowButtonsContainer;
