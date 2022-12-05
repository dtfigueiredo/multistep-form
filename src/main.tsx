import { RecoilRoot } from 'recoil';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './assets/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
