export const AddressForm = () => {
  return (
    <>
      <h2>Address Form</h2>

      <div>
        <label htmlFor='street'>Street: </label>
        <input
          autoFocus
          type='text'
          id='street'
          name='street'
        />
      </div>

      <div>
        <label htmlFor='city'>City: </label>
        <input
          type='text'
          id='city'
          name='city'
        />
      </div>

      <div>
        <label htmlFor='state'>State: </label>
        <input
          type='text'
          id='state'
          name='state'
        />
      </div>

      <div>
        <label htmlFor='zipCode'>Zip Code: </label>
        <input
          type='text'
          id='zipCode'
          name='zipCode'
        />
      </div>
    </>
  );
};
