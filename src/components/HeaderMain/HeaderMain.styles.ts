import { Colors } from '@config';
import { StyleSheet } from 'react-native';
import { FontStyles } from '../../config/FontStyles';

export const styles = StyleSheet.create({
  title: {
    ...FontStyles.h1,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: Colors.generic.white
  }
});
