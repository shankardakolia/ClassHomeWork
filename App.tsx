import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import Store from './src/redux/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
