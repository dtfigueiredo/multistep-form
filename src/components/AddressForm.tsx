import { useRecoilState } from 'recoil';

import { formDataState } from '../utils/atoms';
import { FormStepInputBlock } from './commons/FormStepInputBlock';
import { FormStepTitle } from './commons/FormStepTitle';

export const AddressForm = () => {
  const [formData, setFormData] = useRecoilState(formDataState);

  const handleStreet = (event: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, street: event.target.value });
  const handleCity = (event: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, city: event.target.value });
  const handleState = (event: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, state: event.target.value });
  const handleZipCode = (event: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, zipCode: event.target.value });

  return (
    <>
      <FormStepTitle>Address Form</FormStepTitle>

      <FormStepInputBlock
        value={formData.street}
        handleChange={handleStreet}
        isRequired
        isFocused
        label='Street'
        type='text'
        id='street'
        name='street'
        placeholder='Type your address street'
      />

      <FormStepInputBlock
        value={formData.city}
        handleChange={handleCity}
        isRequired
        label='City'
        type='text'
        id='city'
        name='city'
        placeholder='Type your address city'
      />

      <FormStepInputBlock
        value={formData.state}
        handleChange={handleState}
        isRequired
        label='State'
        type='text'
        id='state'
        name='state'
        placeholder='Type your address state'
      />

      <FormStepInputBlock
        value={formData.zipCode}
        handleChange={handleZipCode}
        isRequired
        label='Zip Code'
        type='text'
        id='zipcode'
        name='zipcode'
        placeholder='Type your address zip code'
      />
    </>
  );
};
