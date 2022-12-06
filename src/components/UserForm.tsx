import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { formDataState } from '../utils/atoms';
import { FormStepInputBlock } from './commons/FormStepInputBlock';
import { FormStepTitle } from './commons/FormStepTitle';

export const UserForm = () => {
  const [formData, setFormData] = useRecoilState(formDataState);

  const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, firstName: event.target.value });
  const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, lastName: event.target.value });
  const handleAge = (event: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, age: event.target.value });

  return (
    <>
      <FormStepTitle>User Form</FormStepTitle>

      <FormStepInputBlock
        value={formData.firstName}
        handleChange={(event) => handleFirstName(event)}
        isFocused
        label='First Name'
        type='text'
        id='firstName'
        name='firstName'
        placeholder='Type your first name'
      />

      <FormStepInputBlock
        value={formData.lastName}
        handleChange={handleLastName}
        label='Last Name'
        type='text'
        id='lastName'
        name='lastName'
        placeholder='Type your last name'
      />

      <FormStepInputBlock
        value={formData.age}
        handleChange={handleAge}
        label='Age'
        type='number'
        id='age'
        name='age'
        placeholder='Type your age'
      />
    </>
  );
};
