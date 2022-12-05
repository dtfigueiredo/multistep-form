import { FormStepInputBlock } from './commons/FormStepInputBlock';
import { FormStepTitle } from './commons/FormStepTitle';

export const UserForm = () => {
  return (
    <>
      <FormStepTitle>User Form</FormStepTitle>

      <FormStepInputBlock
        isFocused
        label='First Name'
        type='text'
        id='firstName'
        name='firstName'
      />
      <FormStepInputBlock
        label='Last Name'
        type='text'
        id='lastName'
        name='lastName'
      />
      <FormStepInputBlock
        label='Age'
        type='number'
        id='age'
        name='age'
      />
    </>
  );
};
