import { useState } from 'react';

import styles from './StudentForm.module.scss';

import StudentFormItem from './StudentFormItem';

import { studentFormItems } from './student-form-items';

import { StudentForm as SF } from './StudentFormClass';

interface StudentFormProps {
  buttonName: string;
  student: any;
}

interface StudentOverview {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  website: string;
  companyName: string;
}

const StudentForm = ({ buttonName, student }: StudentFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    website: '',
    companyName: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const studentForm = new SF();

    const submitResult = studentForm.submitForm();

    setSubmitted(true);

    if (submitResult.isValidated) {
      console.log('Form submitted');
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
    companyName: student.company.name,
  };

  return (
    <form
      id='student-form'
      className={styles.form}
      onSubmit={handleSubmit}
      onChange={handleFormChange}
    >
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
      <button type='submit'>{buttonName}</button>
    </form>
  );
};

export default StudentForm;
