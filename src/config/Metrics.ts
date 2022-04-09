import { Dimensions, Platform } from 'react-native';
import { hasNotch } from 'react-native-device-info';

const { width, height } = Dimensions.get('window');

// Based on iPhone 11
const guideline = {
  height: 896,
  width: 414
};

// Normalise functions
const scale = (size: number) => (width / guideline.width) * size;
export const verticalScale = (size: number) =>
  (height / guideline.height) * size;
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const Metrics = {
  screenWidth: width,
  screenHeight: height,
  navBarHeight: Platform.OS === 'ios' ? 54 : 66,
  notch: hasNotch(),
  margins: {
    horizontal: 16,
    bottom: 16,
    top: hasNotch() ? 46 : 16
  }
};
