import React from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import moment from 'moment';
import reactotron from 'reactotron-react-native';
import { IFixturesData } from './FixturesItem.models';
import styles from './FixturesItem.styles';
import { GlobalTouchableHighlight } from '@config';

export interface IFixturesItemProps {
  fixturesData: IFixturesData;
}

export const FixturesItem: React.FC<IFixturesItemProps> = ({
  fixturesData
}: IFixturesItemProps) => {
  const compName = 'FixturesItem';
  reactotron.log!('FixturesItem: fixturesData:', fixturesData);
  reactotron.log!('TEST:', moment(fixturesData.dateTime).isDST());

  const timeAdjust = moment(fixturesData.dateTime).isDST() ? 1 : 0;

  const onPress = () => {
    reactotron.log!('FixturesItem onPress');
  };

  return (
    <TouchableHighlight
      underlayColor={GlobalTouchableHighlight.underlayColor}
      activeOpacity={GlobalTouchableHighlight.activeOpacity}
      onPress={() => onPress()}
      style={styles.touchableHighlight}
    >
      <View style={styles.container}>
        {/* Home club */}
        <View style={styles.homeClub}>
          <Image
            source={{ uri: fixturesData.homeClub.logo }}
            style={styles.logo}
            resizeMode="contain"
            accessibilityRole="image"
          />
          <Text>{fixturesData.homeClub.name}</Text>
        </View>

        {/* Date and competiton name */}
        <View style={styles.dateTimeContainer}>
          <Text style={styles.date}>
            {moment(fixturesData.dateTime).format('ddd DD MMM')}
          </Text>
          <Text style={styles.time}>
            {moment(fixturesData.dateTime)
              .subtract(timeAdjust, 'hour')
              .format('HH:MM')}
          </Text>
          <Text style={styles.competitionType}>
            {fixturesData.competition.name}
          </Text>
        </View>

        {/* Away club */}
        <View style={styles.awayClub}>
          <Image
            source={{ uri: fixturesData.awayClub.logo }}
            style={styles.logo}
            resizeMode="contain"
            accessibilityRole="image"
          />
          <Text>{fixturesData.awayClub.name}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
