import { StyleSheet } from 'react-native';

const coreFonts = StyleSheet.create({
  coreFontBold: {
    fontFamily: 'Tungsten-Black',
    fontWeight: '700'
  },
  coreFontRegular: {
    fontFamily: 'OpenSans',
    fontWeight: '400'
  },
  coreIconFont: {
    fontFamily: 'FontAwesome6Pro-Light.otf',
    fontWeight: '300'
  }
});

const fontFamilies = StyleSheet.create({
  systemRegular: {
    fontFamily: 'System',
    fontWeight: '400'
  },
  systemBold: {
    fontFamily: 'System',
    fontWeight: '500'
  },
  coreFontsH1: {
    ...coreFonts.coreFontBold,
    fontSize: 32,
    lineHeight: 32 * 1.1,
    letterSpacing: 32 * 0.03
  },
  coreFontsH2: {
    ...coreFonts.coreFontBold,
    fontSize: 22,
    lineHeight: 22 * 1.2,
    letterSpacing: 22 * 0.03
  },
  coreFontsH3: {
    ...coreFonts.coreFontBold,
    fontSize: 18,
    lineHeight: 18 * 1.2,
    letterSpacing: 18 * 0.03
  },
  coreFontsH4: {
    ...coreFonts.coreFontBold,
    fontSize: 16,
    lineHeight: 16 * 1.2,
    letterSpacing: 16 * 0.03
  },
  coreFontsH5: {
    ...coreFonts.coreFontBold,
    fontSize: 14,
    lineHeight: 14 * 1.2,
    letterSpacing: 14 * 0.03
  },
  coreFontsP: {
    ...coreFonts.coreFontRegular,
    fontSize: 26,
    lineHeight: 26 * 1.4
  },
  coreFontsPSmall: {
    ...coreFonts.coreFontRegular,
    fontSize: 13,
    lineHeight: 13 * 1.4
  },
  coreIconFont: {
    ...coreFonts.coreIconFont,
    fontSize: 22
  }
});

export const FontStyles = {
  h1: fontFamilies.coreFontsH1,
  h2: fontFamilies.coreFontsH2,
  h3: fontFamilies.coreFontsH3,
  h4: fontFamilies.coreFontsH4,
  h5: fontFamilies.coreFontsH5,
  p: fontFamilies.coreFontsP,
  pSmall: fontFamilies.coreFontsPSmall,
  icon: fontFamilies.coreIconFont
};