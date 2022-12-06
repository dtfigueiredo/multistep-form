import { Eye, EyeClosed } from 'phosphor-react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { passwordTypeState, showPassworState } from '../../utils/atoms';
import { FormStepInputBlockProps } from '../../utils/types';

export const FormStepInputBlock = ({ label, type, id, name, placeholder, isFocused, value, handleChange, isPassword }: FormStepInputBlockProps) => {
  const [showPassword, setShowPassword] = useRecoilState(showPassworState);
  const [inputType, setInputType] = useRecoilState(passwordTypeState);

  const handleShowPassword = () => {
    if (!value) return;
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    showPassword ? setInputType('text') : setInputType('password');
  }, [showPassword]);

  const passwordInput = () => {
    return (
      <div className='w-9/12 flex items-center relative'>
        <input
          autoFocus={isFocused}
          id={id}
          type={inputType}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(event) => handleChange(event)}
          className='w-full py-1 px-2 border-none outline-none rounded text-zinc-900'
        />

        {isPassword && (
          <button
            type='button'
            onClick={() => handleShowPassword()}
            className='absolute right-4 text-lg font-bold text-zinc-900'>
            {showPassword ? <Eye /> : <EyeClosed />}
          </button>
        )}
      </div>
    );
  };

  const defaultInput = () => {
    return (
      <div className='w-9/12 flex items-center relative'>
        <input
          autoFocus={isFocused}
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(event) => handleChange(event)}
          className='w-full py-1 px-2 border-none outline-none rounded text-zinc-900'
        />
      </div>
    );
  };

  return (
    <div className='mt-2 flex justify-start items-center gap-4'>
      <label
        className='flex-1 text-lg'
        htmlFor={name}>
        {label}
      </label>

      {isPassword ? passwordInput() : defaultInput()}
    </div>
  );
};
