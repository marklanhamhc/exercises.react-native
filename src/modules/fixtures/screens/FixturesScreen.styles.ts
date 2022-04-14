import { BaseSize, Colors } from '@config';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: BaseSize * 2
  },
  activityIndicator: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    backgroundColor: Colors.generic.white,
    opacity: 0.9
  },
  flatlist: {
    height: '100%'
  }
});

export default styles;
