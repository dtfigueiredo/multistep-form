import { useRecoilValue } from 'recoil';
import { stepsInitialState } from './utils/atoms';
import { AccountForm } from './components/AccountForm';
import { FormControlButton } from './components/FormControlButton';
import { AddressForm } from './components/AddressForm';
import { UserForm } from './components/UserForm';

export const App = () => {
  const currentStep = useRecoilValue(stepsInitialState);

  const formComponents = [<UserForm />, <AddressForm />, <AccountForm />];
  const currentComponent = formComponents[currentStep];

  const stepsDisplay = `${currentStep + 1} / ${formComponents.length}`;

  return (
    <div className='w-screen min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500'>
      <div className='p-4 w-4/5 max-w-xl h-max bg-zinc-700/80 shadow-lg rounded-lg text-white'>
        <p className='text-right'>{stepsDisplay}</p>

        <form className='mt-4'>
          <div>{currentComponent}</div>

          <div className='mt-4 flex justify-end items-center gap-4'>
            {currentStep >= 1 && <FormControlButton type='button' />}
            <FormControlButton type='submit' />
          </div>
        </form>
      </div>
    </div>
  );
};
