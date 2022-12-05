import { atom } from 'recoil';
import { formDataValuesProps } from './types';

export const stepsInitialState = atom<number>({
  key: 'stepsStateKey',
  default: 0,
});

export const formDataState = atom<formDataValuesProps>({
  key:'formDataKey',
  default:{
    firstName: '',
    lastName: '',
    age: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    email: '',
    password: ''
  }
})