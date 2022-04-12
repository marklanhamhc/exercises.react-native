import React from 'react';
import { Text } from 'react-native';
import ScreenWrapper from '../../../components/ScreenWrapper/ScreenWrapper';

export default () => {
  return (
    <ScreenWrapper
      style={[{ justifyContent: 'center', alignContent: 'center', flex: 1 }]}
    >
      <Text style={[{ textAlign: 'center' }]}>Ignore this screen</Text>
    </ScreenWrapper>
  );
};
