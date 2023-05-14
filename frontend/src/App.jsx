import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import { Provider } from 'react-redux';
import createStore from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

const App = () => {
  return (
    <Provider store={createStore({})}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
