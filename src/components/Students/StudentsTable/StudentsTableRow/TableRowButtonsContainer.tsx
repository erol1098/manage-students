import { useState } from 'react';
import Image from 'next/image';

import axios from 'axios';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setStudents } from '@/redux/features/studentsSlice';

import Modal from '@/components/Modal';
import StudentForm from '../../StudentForm';

const TableRowButtonsContainer = ({ student }: any) => {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useAppDispatch();
  const students = useAppSelector((state) => state.students.students);

  const handleDeleteUser = (userId: number) => {
    userId > 100
      ? dispatch(
          setStudents(students.filter((student: any) => student.id !== userId))
        )
      : axios.delete(`https://dummyjson.com/users/${userId}`).then((res) => {
          const updatedStudents = students.filter(
            (student: any) => student.id !== userId
          );
          dispatch(setStudents(updatedStudents));
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
        <Modal setOpenModal={setOpenModal}>
          <StudentForm
            student={student}
            buttonName='Update Student'
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}
    </>
  );
};

export default TableRowButtonsContainer;
