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
        placeholder='Type your first name'
      />

      <FormStepInputBlock
        label='Last Name'
        type='text'
        id='lastName'
        name='lastName'
        placeholder='Type your last name'
      />

      <FormStepInputBlock
        label='Age'
        type='number'
        id='age'
        name='age'
        placeholder='Type your age'
      />
    </>
  );
};
