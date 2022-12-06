import { ReactNode } from 'react';

export type ControlFormButtonProps = {
  type: 'button' | 'submit' | 'reset' | undefined;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  value: string;
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
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type formDataValuesProps = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  email: string;
  password: string;
};
