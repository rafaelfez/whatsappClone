import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Routes from './src/Routes';
import reducers from './src/reducers/'; //index importa automaticamente

export default props => (
  <Provider store={createStore(reducers)}>
    <Routes />
  </Provider>
);