import { Colors, Fontello } from '@config';
import React, { useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  Text,
  View,
  ListItemRenderInfo,
  ActivityIndicator,
  RefreshControl
} from 'react-native';
import { NewsArticle } from '../../../core/api/models';
import { useStateSelector, useThunkDispatch } from '../../../core/redux/hooks';
import store from '../../../store';
import { NewsItem } from '../components/NewsItem/NewsItem';
import { getNewsfeedAsync } from '../thunks';
import styles from './HomeScreen.styles';
import reactotron from 'reactotron-react-native';

const ITEM_HEIGHT = 149;

export default () => {
  reactotron.log!('store.getState():', store.getState());

  // Set dispatch
  const dispatch = useThunkDispatch();

  // Set newsLoading and newsfeed from state
  const newsLoading = useStateSelector(u => u.newsfeed.newsLoading);
  const newsfeed = useStateSelector(u => u.newsfeed.newsfeed);

  // Set useState variables
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<NewsArticle[]>([]);
  const [refreshing, setRefreshing] = React.useState(false);

  // reactotron.log!('loading', newsLoading);
  // reactotron.log!('newsfeed', newsfeed);

  // Get initial news feed
  useEffect(() => {
    const newsParams = {
      page: 0,
      pageSize: 10
    };
    dispatch(getNewsfeedAsync(newsParams));
  }, [dispatch]);

  /**
   * Set data by parsing existing data feed and concatenating new data
   * Then run this again if newsfeed or setData dependency triggers to update the view
   */
  useEffect(() => {
    setData(prev => [...prev, ...newsfeed]);
  }, [newsfeed, setData]);

  /**
   * Fetch data request handles the page increment and
   * simulates the API feed (or mock in this case).
   * This runs each time the page or dispatch dependency changes.
   */
  const fetchData = useCallback(async () => {
    const newsParams = {
      page,
      pageSize: 10
    };
    dispatch(getNewsfeedAsync(newsParams));
  }, [page, dispatch]);

  /**
   * Runs every time page or fetchData dependency changes.
   */
  useEffect(() => {
    if (page === 0) {
      setData([]);
    }
    fetchData();
  }, [page, fetchData]);

  // Set the NewsItem component to render in the FlatList
  const renderItem = useCallback(
    ({ item }: ListItemRenderInfo<NewsArticle>) => <NewsItem newsData={item} />,
    []
  );

  // Set the FlatList header component and useCallback to store in memory
  const renderHeader = useCallback(
    () => <View style={styles.flatListHeader} />,
    []
  );

  /**
   * Set the FlatList footer component and useCallback to store in memory.
   * Also renders an Activity Indicator at the footer of the FlatList whilst
   * the data is being fetched
   */
  const renderFooter = useCallback(() => {
    if (newsLoading) {
      return <View style={styles.flatListFooterEmpty} />;
    }

    return (
      <View style={styles.flatListFooter}>
        <ActivityIndicator
          size="small"
          animating
          color={Colors.generic.black}
        />
      </View>
    );
  }, [newsLoading]);

  /**
   * Once the user has reached the end of the
   * FlatList, call the next set of data.
   * If the dataset is complete, do nothing.
   */
  const onEndReached = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  /**
   * This simulates a pull to refresh and in the real world
   * this would fetch the latest data from the API.
   */
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setData([...newsfeed]);
    wait(1500).then(() => setRefreshing(false));
  }, [newsfeed]);

  // Renders the News feed items into an infinite scrollable list
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        initialNumToRender={6}
        renderItem={renderItem}
        data={data}
        style={styles.flatlist}
        ListFooterComponent={renderFooter}
        ListHeaderComponent={renderHeader}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        getItemLayout={(data, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index
        })}
      />
    </View>
  );
};
