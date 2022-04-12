import {
  BaseSize,
  Colors,
  GlobalBorderRadius,
  Metrics,
  FontStyles
} from '@config';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  touchableHighlight: {
    backgroundColor: Colors.generic.white,
    marginBottom: BaseSize * 0.2,
    padding: BaseSize,
    borderRadius: GlobalBorderRadius
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  textContainer: {
    padding: BaseSize,
    flex: 1
  },
  title: {
    ...FontStyles.pSemiBold,
    marginBottom: BaseSize,
    color: Colors.generic.blackHeavyMetal
  },
  description: {
    ...FontStyles.p,
    marginBottom: BaseSize,
    color: Colors.generic.blackHeavyMetal
  },
  dateTime: {
    ...FontStyles.pSmall,
    color: Colors.generic.blackHeavyMetal,
    opacity: 0.5
  },
  image: {
    width: Metrics.screenWidth * 0.2,
    height: Metrics.screenWidth * 0.2,
    borderRadius: GlobalBorderRadius
  }
});

export default styles;
