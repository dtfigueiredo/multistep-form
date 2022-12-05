import { StepFormTitleProps } from '../../assets/types';

export const FormStepTitle = ({ children }: StepFormTitleProps) => {
  return <h2 className='mb-4 text-2xl text-center font-bold'>{children}</h2>;
};
