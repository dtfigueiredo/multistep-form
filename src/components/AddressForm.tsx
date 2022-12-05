import { FormStepInputBlock } from './commons/FormStepInputBlock';
import { FormStepTitle } from './commons/FormStepTitle';

export const AddressForm = () => {
  return (
    <>
      <FormStepTitle>Address Form</FormStepTitle>

      <FormStepInputBlock
        isFocused
        label='Street'
        type='text'
        id='street'
        name='street'
        placeholder='Type your address street'
      />

      <FormStepInputBlock
        label='City'
        type='text'
        id='city'
        name='city'
        placeholder='Type your address city'
      />
      
      <FormStepInputBlock
        label='City'
        type='text'
        id='state'
        name='state'
        placeholder='Type your address state'
      />
      
      <FormStepInputBlock
        label='Zip Code'
        type='text'
        id='zipcode'
        name='zipcode'
        placeholder='Type your address zip code'
      />
    </>
  );
};
