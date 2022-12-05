import { useRecoilState } from 'recoil';

import { stepsInitialState } from '../assets/atoms';

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
    currentStep,
    currentComponent: steps[currentStep],
    goTo,
    nextStep,
    previousStep,
  };
};
