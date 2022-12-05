import { FormStepInputBlockProps } from '../../assets/types';

export const FormStepInputBlock = ({
  label,
  type,
  id,
  name,
  isFocused,
}: FormStepInputBlockProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus={isFocused}
        type={type}
        id={id}
        name={name}
      />
    </div>
  );
};
