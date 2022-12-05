import { FormStepInputBlockProps } from '../../assets/types';

export const FormStepInputBlock = ({
  label,
  type,
  id,
  name,
  placeholder,
  isFocused,
}: FormStepInputBlockProps) => {
  return (
    <div className='mt-2 flex justify-start items-center gap-4'>
      <label className='flex-1 text-lg' htmlFor={name}>{label}</label>

      <input
        className='w-9/12 py-1 px-2 border-none outline-none rounded'
        autoFocus={isFocused}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};
