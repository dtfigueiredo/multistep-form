import { atom } from 'recoil';

export const stepsInitialState = atom<number>({
  key: 'stepsStateKey',
  default: 0,
});
