import { atom } from 'recoil';
import { formDataValuesProps } from './types';

export const stepsInitialState = atom<number>({
  key: 'stepsStateKey',
  default: 0,
});

export const formDataState = atom<formDataValuesProps>({
  key: 'formDataKey',
  default: {
    firstName: '',
    lastName: '',
    age: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    email: '',
    password: '',
  },
});

export const showPassworState = atom<boolean>({
  key: 'showPasswordKey',
  default: false,
});

export const passwordTypeState = atom<string>({
  key: 'passwordTypeKey',
  default: '',
});
