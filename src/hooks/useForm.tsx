import { useRecoilState } from 'recoil';

import { formDataState, stepsInitialState } from '../utils/atoms';

//*custom hook that will be responsible for managing the step changing form
export const useMultistepForm = (steps: JSX.Element[]) => {
  const [currentStep, setCurrentStep] = useRecoilState(stepsInitialState);
  const [formData, setFormData] = useRecoilState(formDataState);

  const nextStep = () => {
    if (currentStep >= steps.length - 1) {
      alert('Form submmited');
      setCurrentStep(0);
      setFormData({
        firstName: '',
        lastName: '',
        age: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        email: '',
        password: '',
      });
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    if (currentStep <= 0) return currentStep;
    setCurrentStep(currentStep - 1);
  };

  return {
    steps,
    currentStep,
    currentComponent: steps[currentStep],
    nextStep,
    previousStep,
    isFirstStep: currentStep === 0,
    isFinalStep: currentStep === steps.length - 1,
  };
};
