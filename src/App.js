import React from 'react';
import { Provider } from 'react-redux'

import store from './store/'

import ListPage from './screens/list'

import PageRouter from './routes'


function App() {
  return (
  <Provider store={store}>
    <PageRouter />
  </Provider>
  )
}

export default App;
