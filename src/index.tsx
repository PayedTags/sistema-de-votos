import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DAppProvider, Config } from '@usedapp/core';
import { getNetworkId } from "./config/config";



function GetConfig():Config
{
  return {supportedChains: [getNetworkId()]}; 
}

ReactDOM.render(
  <DAppProvider config={GetConfig()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DAppProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
