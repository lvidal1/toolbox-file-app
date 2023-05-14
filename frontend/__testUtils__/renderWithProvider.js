import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import createStore from '../src/store';

const renderWithProvider = (
  ui,
  { preloadedState = {}, store = createStore(preloadedState), ...renderOptions } = {}
) => {
  setupListeners(store.dispatch);

  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export default renderWithProvider;
