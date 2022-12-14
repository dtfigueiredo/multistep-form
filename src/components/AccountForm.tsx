import { useRecoilState } from 'recoil';

import { formDataState } from '../utils/atoms';
import { FormStepInputBlock } from './commons/FormStepInputBlock';
import { FormStepTitle } from './commons/FormStepTitle';

export const AccountForm = () => {
  const [formData, setFormData] = useRecoilState(formDataState);

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: event.target.value });
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, password: event.target.value });

  return (
    <>
      <FormStepTitle>Account Form</FormStepTitle>

      <FormStepInputBlock
        value={formData.email}
        handleChange={handleEmail}
        isRequired
        isFocused
        label='Email'
        type='email'
        id='email'
        name='email'
        placeholder='Type your best email'
      />

      <FormStepInputBlock
        value={formData.password}
        handleChange={handlePassword}
        isRequired
        label='Password'
        type='password'
        isPassword
        id='password'
        name='password'
        placeholder='Type your password'
      />
    </>
  );
};
