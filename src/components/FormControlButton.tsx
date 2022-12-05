import { MdArrowBack, MdArrowForward } from 'react-icons/md';

import { ControlFormButtonProps } from '../utils/types';

export const FormControlButton = ({ type, handleClick, value }: ControlFormButtonProps) => {
  const PreviousBtn = () => <><MdArrowBack /> {value}</>
  const NextBtn = () => <><MdArrowForward /> {value}</>

  const buttonValue =
    type === 'button' ? <PreviousBtn/> : <NextBtn />

  return (
    <button
      type={type}
      onClick={handleClick}
      className='py-1 px-2 flex justify-start items-center gap-2 border border-slate-100 rounded-lg'>
      {buttonValue}
    </button>
  );
};
