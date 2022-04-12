import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { Alert, Image, Text, TouchableHighlight, View } from 'react-native';
import reactotron from 'reactotron-react-native';
import { GlobalTouchableHighlight } from '../../../../config/GlobalStyles';
import { NewsArticle } from '../../../../core/api/models';
import styles from './NewsItem.styles';

export interface INewsItemProps {
  newsData: NewsArticle;
}

export const NewsItem: React.FC<INewsItemProps> = ({
  newsData
}: INewsItemProps) => {
  // reactotron.log!('newsData:', newsData);

  const [timeStamp, setTimeStamp] = useState('');
  const [id, setId] = useState(newsData.id);

  // Set the correct time stamp based on the age of the news item
  useMemo(() => {
    const newsItemDate = newsData.dateTime;

    let hours = moment().diff(moment(newsItemDate), 'hours');
    let days = moment().diff(moment(newsItemDate), 'days');

    if (hours <= 24) {
      // If less than 24 hours old
      setTimeStamp(`${hours} hours ago`);
    } else if (days >= 1 && days <= 30) {
      // If more than a day but less than 30 days old
      setTimeStamp(`${days} days ago`);
    } else {
      // Over 30 days old
      setTimeStamp(moment(newsItemDate).format('ddd DD MMM'));
    }
  }, [newsData.dateTime]);

  const onPress = () => {
    setId(newsData.id);
    alert(`NewsItem onPress: ${id}`);
  };

  return (
    <TouchableHighlight
      underlayColor={GlobalTouchableHighlight.underlayColor}
      activeOpacity={GlobalTouchableHighlight.activeOpacity}
      onPress={() => onPress()}
      style={styles.touchableHighlight}
    >
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {newsData.title}
          </Text>
          <Text
            style={styles.description}
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            {newsData.description}
          </Text>
          <Text style={styles.dateTime}>{timeStamp}</Text>
        </View>
        <Image
          source={{ uri: newsData.image }}
          style={styles.image}
          resizeMode="contain"
          accessibilityRole="image"
        />
      </View>
    </TouchableHighlight>
  );
};
