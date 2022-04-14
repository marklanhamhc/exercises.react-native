import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import Root from './Root';
import store from './store';
import Reactotron, { networking } from 'reactotron-react-native';

Reactotron.configure({ host: '192.168.68.114', port: 9090 }).connect();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
