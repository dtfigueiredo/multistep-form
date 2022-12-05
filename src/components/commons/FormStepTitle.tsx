import { StepFormTitleProps } from '../../assets/types';

export const FormStepTitle = ({ children }: StepFormTitleProps) => {
  return <h2 className='mb-8 text-4xl text-center font-bold'>{children}</h2>;
};
