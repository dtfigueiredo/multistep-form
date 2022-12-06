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
        handleChange={(event) => handleStreet(event)}
        isFocused
        label='Street'
        type='text'
        id='street'
        name='street'
        placeholder='Type your address street'
      />

      <FormStepInputBlock
        value={formData.city}
        handleChange={(event) => handleCity(event)}
        label='City'
        type='text'
        id='city'
        name='city'
        placeholder='Type your address city'
      />

      <FormStepInputBlock
        value={formData.state}
        handleChange={(event) => handleState(event)}
        label='State'
        type='text'
        id='state'
        name='state'
        placeholder='Type your address state'
      />

      <FormStepInputBlock
        value={formData.zipCode}
        handleChange={(event) => handleZipCode(event)}
        label='Zip Code'
        type='text'
        id='zipcode'
        name='zipcode'
        placeholder='Type your address zip code'
      />
    </>
  );
};
