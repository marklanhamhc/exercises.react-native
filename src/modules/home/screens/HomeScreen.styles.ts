import { BaseSize, Colors, Metrics } from '@config';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
  container: {
    // padding: BaseSize * 2
  },
  flatlist: {
    height: '100%'
  },
  flatListHeader: {
    height: BaseSize
  },
  flatListFooter: {
    height: BaseSize * 7,
    paddingTop: BaseSize * 2
  },
  flatListFooterEmpty: {
    height: BaseSize * 7
  }
});

export default styles;
