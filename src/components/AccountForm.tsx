export const AccountForm = () => {
  return (
    <>
      <h2>Account Form</h2>

      <div>
        <label htmlFor='email'>Email: </label>
        <input
          autoFocus
          type='text'
          id='email'
          name='email'
        />
      </div>

      <div>
        <label htmlFor='password'>Password: </label>
        <input
          type='text'
          id='password'
          name='password'
        />
      </div>
    </>
  );
};
