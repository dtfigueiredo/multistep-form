import { FormStepInputBlockProps } from "../../utils/types";

export const FormStepInputBlock = ({
  label,
  type,
  id,
  name,
  placeholder,
  isFocused,
  value,
  handleChange
}: FormStepInputBlockProps) => {
  return (
    <div className='mt-2 flex justify-start items-center gap-4'>
      <label className='flex-1 text-lg' htmlFor={name}>{label}</label>

      <input
        autoFocus={isFocused}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(event)=>handleChange(event)}
        className='w-9/12 py-1 px-2 border-none outline-none rounded text-zinc-900'
      />
    </div>
  );
};
