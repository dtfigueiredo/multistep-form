import { FormStepInputBlock } from "./commons/FormStepInputBlock";
import { FormStepTitle } from "./commons/FormStepTitle";

export const AccountForm = () => {
  return (
    <>
      <FormStepTitle>Account Form</FormStepTitle>

      <FormStepInputBlock
        isFocused
        label='Email'
        type='email'
        id='email'
        name='email'
        placeholder='Type your best email'
      />

      <FormStepInputBlock
        label='Password'
        type='password'
        id='password'
        name='password'
        placeholder='Type your password'
      />
    </>
  );
};
