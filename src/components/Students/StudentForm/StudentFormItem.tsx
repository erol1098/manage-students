import styles from './StudentForm.module.scss';

interface StudentFormItemProps {
  label: string;
  id: string;
  type: string;
  name: string;
  placeholder: string;
  defaultValue?: string;
  error?: string;
}

const StudentFormItem = ({
  label,
  id,
  type,
  name,
  placeholder,
  defaultValue,
  error,
}: StudentFormItemProps) => {
  return (
    <div className={styles['form__input']}>
      <label htmlFor='email'>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      <small>{error}</small>
    </div>
  );
};

export default StudentFormItem;
