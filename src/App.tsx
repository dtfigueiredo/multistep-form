import { FormEvent } from 'react';
import { AccountForm } from './components/AccountForm';
import { AddressForm } from './components/AddressForm';
import { FormControlButton } from './components/FormControlButton';
import { UserForm } from './components/UserForm';
import { useMultistepForm } from './hooks/useForm';

export const App = () => {
  const formComponents = [<UserForm />, <AddressForm />, <AccountForm />];
  //*calling the custom hook
  const { currentComponent, currentStep, isFinalStep, isFirstStep, nextStep, previousStep } = useMultistepForm(formComponents);

  const stepsDisplay = `${currentStep + 1} / ${formComponents.length}`;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    //*calling the nextStep function here will proprerly trigger the required validation from the inputs fields
    nextStep();
  };

  return (
    <div className='w-screen min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500'>
      <div className='p-4 w-4/5 max-w-xl h-max bg-zinc-700/80 shadow-lg rounded-lg text-white'>
        <p className='text-right'>{stepsDisplay}</p>

        <form
          className='mt-4'
          onSubmit={handleSubmit}>
          <div>{currentComponent}</div>

          <div className='mt-4 flex justify-end items-center gap-4'>
            {!isFirstStep && (
              <FormControlButton
                handleClick={previousStep}
                type='button'
                value='Previous'
              />
            )}

            <FormControlButton
              type='submit'
              value={isFinalStep ? 'Finish' : 'Next'}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
