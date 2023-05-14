import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
