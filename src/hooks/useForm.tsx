import { useRecoilState } from 'recoil';

import { formDataState, stepsInitialState } from '../utils/atoms';

export const useMultistepForm = (steps: JSX.Element[]) => {
  const [currentStep, setCurrentStep] = useRecoilState(stepsInitialState);
  const [formData, setFormData] = useRecoilState(formDataState)

  const nextStep = (event:any) => {
    event.preventDefault()
    if (currentStep >= steps.length - 1) {
      alert('fim')
      setCurrentStep(0)
      setFormData({
        firstName: '',
        lastName: '',
        age: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        email: '',
        password: ''
      })
      return
    };
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    if (currentStep <= 0) return currentStep;
    setCurrentStep(currentStep - 1);
  };

  const goTo = (index: number) => {
    setCurrentStep(index);
  };

  return {
    steps,
    currentStep,
    currentComponent: steps[currentStep],
    goTo,
    nextStep,
    previousStep,
    isFirstStep: currentStep < 1,
    isFinalStep: currentStep === steps.length -1
  };
};
