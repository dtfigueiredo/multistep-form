import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { useRecoilState } from 'recoil';

import { stepsInitialState } from '../utils/atoms';
import { ControlFormButtonProps } from '../assets/types';

export const FormControlButton = ({ type }: ControlFormButtonProps) => {
  const [currentStep, setCurrentStep] = useRecoilState(stepsInitialState);

  const buttonValue =
    type === 'button' ? (
      <>
        <MdArrowBack /> Voltar
      </>
    ) : (
      <>
        {currentStep === 2 ? 'Finalizar' : 'Avançar'} <MdArrowForward />
      </>
    );

  const handleBackForm = () => {
    if (currentStep <= 0) return;
    setCurrentStep(currentStep - 1);
  };

  const handleAdvanceForm = (e: any) => {
    e.preventDefault();
    if (currentStep === 2) {
      alert('fim');
      setCurrentStep(0);
      return;
    }

    setCurrentStep(currentStep + 1);
  };

  const buttonClick = type === 'button' ? handleBackForm : handleAdvanceForm;

  return (
    <button
      type={type}
      onClick={buttonClick}
      className='py-1 px-2 flex justify-start items-center gap-2 border border-slate-100 rounded-lg '>
      {buttonValue}
    </button>
  );
};
