import { ReactNode } from 'react';

export type ControlFormButtonProps = {
  type: 'button' | 'submit' | 'reset' | undefined;
};

export type StepFormTitleProps = {
  children: ReactNode;
};

export type FormStepInputBlockProps = {
  label: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
  isFocused?: boolean;
  isPassword?: boolean;
};
