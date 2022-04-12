import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import reactotron from 'reactotron-react-native';
import ScreenWrapper from '../../../components/ScreenWrapper/ScreenWrapper';
import { api } from '../../../core/api';
import { NewsArticle } from '../../../core/api/models';
import { useStateSelector, useThunkDispatch } from '../../../core/redux/hooks';
import { getNewsfeedAsync } from '../thunks';
import styles from './HomeScreen.styles';

export default () => {
  const newsLoading = useStateSelector(u => u.newsfeed.newsLoading);
  const newsfeed = useStateSelector(u => u.newsfeed.newsfeed);
  const dispatch = useThunkDispatch();

  const [page, setPage] = useState();

  useEffect(() => {
    // When the screen first loads,
    // we fetch all the news data from the API
    const newsParams = {
      page: 1,
      pageSize: 10
    };
    dispatch(getNewsfeedAsync(newsParams));
  }, [dispatch]);

  reactotron.log!('loading', newsLoading);
  reactotron.log!('newsfeed', newsfeed);

  const [data, setData] = useState<NewsArticle[]>([]);

  // useEffect(() => {
  //   api.news
  //     .get({
  //       page: 0,
  //       pageSize: 10
  //     })
  //     .then(news => {
  //       reactotron.log!('NEWS:', news);
  //     });
  // });

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>TEST: {item}</Text>
      </View>
    );
  };

  return (
    <ScreenWrapper>
      {/* Display data once fetched */}
      <FlatList
        keyExtractor={item => item.id}
        initialNumToRender={6}
        renderItem={renderItem}
        data={data}
        style={styles.flatlist}
      />

      {/* Display loading indicator while data is being fetched */}
      {/* {fixturesLoading && (
        <View style={styles.activityIndicator}>
          <ActivityIndicator />
        </View>
      )} */}
    </ScreenWrapper>
  );
};
