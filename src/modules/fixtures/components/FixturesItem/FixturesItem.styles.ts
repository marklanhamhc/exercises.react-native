import { BaseSize, Colors, GlobalBorderRadius, Metrics } from '@config';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  touchableHighlight: {
    backgroundColor: Colors.generic.white,
    marginBottom: BaseSize * 2,
    padding: BaseSize,
    borderRadius: GlobalBorderRadius
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  logo: {
    width: Metrics.screenWidth * 0.15,
    height: Metrics.screenWidth * 0.15,
    marginBottom: BaseSize
  },
  homeClub: {
    flex: 1,
    alignItems: 'center'
  },
  dateTimeContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  date: {
    fontSize: 14,
    fontWeight: '500'
  },
  time: {
    fontSize: 14,
    fontWeight: '400'
  },
  competitionType: {
    fontSize: 14,
    fontWeight: '300',
    opacity: 0.5
  },
  awayClub: {
    flex: 1,
    alignItems: 'center'
  }
});

export default styles;
