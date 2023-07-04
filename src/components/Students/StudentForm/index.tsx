import { useState } from 'react';

import axios from 'axios';

import styles from './StudentForm.module.scss';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import { setStudents } from '@/redux/features/studentsSlice';

import StudentFormItem from './StudentFormItem';

import { studentFormItems } from './student-form-items';

import { StudentForm as SF } from './StudentFormClass';
import Image from 'next/image';

interface StudentFormProps {
  buttonName: string;
  student: any;
  setOpenModal: (openModal: boolean) => void;
}

interface StudentOverview {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  website: string;
  companyName: string;
}

const StudentForm = ({
  buttonName,
  student,
  setOpenModal,
}: StudentFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    website: '',
    companyName: '',
  });
  const dispatch = useAppDispatch();
  const students = useAppSelector((state) => state.students.students);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const studentForm = new SF();

    const submitResult = studentForm.submitForm();

    setSubmitted(true);

    if (submitResult.isValidated) {
      const partFromSubmitResult = {
        firstName: submitResult.values.firstName,
        lastName: submitResult.values.lastName,
        email: submitResult.values.email,
        phone: submitResult.values.phone,
        domain: submitResult.values.website,
        company: {
          address: student.company?.address,
          department: student.company?.department,
          title: student.company?.title,
          name: submitResult.values.companyName,
        },
      };

      const request = {
        ...student,
        ...partFromSubmitResult,
      };

      const newStudentRequest = {
        image: `https://i.pravatar.cc/150?img=${Math.floor(
          Math.random() * 70
        )}`,
        ...partFromSubmitResult,
      };

      if (student.id) {
        setLoading(true);
        axios
          .put(`https://dummyjson.com/users/${student.id}`, request)
          .then((response) => {
            const updatedStudents = students.map((student: any) => {
              if (student.id === response.data.id) {
                return response.data;
              }
              return student;
            });
            dispatch(setStudents(updatedStudents));
            setLoading(false);
            setOpenModal(false);
          });
      } else {
        setLoading(true);
        axios
          .post('https://dummyjson.com/users/add', newStudentRequest)
          .then((response) => {
            dispatch(setStudents([response.data, ...students]));
            setLoading(false);
            setOpenModal(false);
          });
      }
    } else {
      setErrors(submitResult.values);
    }
  };

  const handleFormChange = () => {
    const studentForm = new SF();
    if (submitted) {
      const formErrors = studentForm.changeForm();
      setErrors(formErrors);
    }
  };

  const studentOverview: StudentOverview = {
    firstName: student.firstName,
    lastName: student.lastName,
    email: student.email,
    phone: student.phone,
    website: student.domain,
    companyName: student.company?.name ? student.company.name : '',
  };

  return (
    <form
      id='student-form'
      className={styles.form}
      onSubmit={handleSubmit}
      onChange={handleFormChange}
    >
      <h3>
        {student.id ? 'Edit' : 'Add'} Student {student.firstName}{' '}
      </h3>
      {studentFormItems.map((item) => (
        <StudentFormItem
          key={item.id}
          label={item.label}
          id={item.id}
          type={item.type}
          name={item.name}
          placeholder={item.placeholder}
          defaultValue={
            studentOverview[item.name as keyof StudentOverview] || ''
          }
          error={errors[item.name as keyof StudentOverview]}
        />
      ))}
      <button type='submit'>
        {loading ? (
          <Image
            src='/assets/icons/loader-white.svg'
            alt='loading'
            width={30}
            height={30}
          />
        ) : (
          buttonName
        )}
      </button>
    </form>
  );
};

export default StudentForm;
