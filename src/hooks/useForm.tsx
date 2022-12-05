import { useRecoilState } from 'recoil';

import { stepsInitialState } from '../utils/atoms';

export const useMultistepForm = (steps: JSX.Element[]) => {
  const [currentStep, setCurrentStep] = useRecoilState(stepsInitialState);

  const nextStep = () => {
    if (currentStep >= steps.length - 1) return currentStep;
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
    isFirstStep: currentStep === 0,
    isFinalStep: currentStep === steps.length -1
  };
};
