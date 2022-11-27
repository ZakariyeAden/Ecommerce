import React from 'react';
import { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App';
import './Components/Style/index.css'
import { Provider } from 'react-redux';
import store from './Components/Redux/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* <React.StrictMode> */}
  <main>
  <Provider store={store}>
    <App />
    </Provider>
    </main>
  {/* </React.StrictMode> */}
  </BrowserRouter>
);


