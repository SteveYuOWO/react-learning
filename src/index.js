import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ApiRouter from './ApiRouter'
// Router 
// HashRouter 带#，刷新不会丢失
// BrowserRouter 不带#，通过history进行切换，刷新会丢失，本地不会
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiRouter />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
