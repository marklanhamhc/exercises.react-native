import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListItemRenderInfo,
  Text,
  View
} from 'react-native';
import ScreenWrapper from '../../../components/ScreenWrapper/ScreenWrapper';
import { useStateSelector, useThunkDispatch } from '../../../core/redux/hooks';
import { getFixturesAsync } from '../thunks';
import { FixturesItem } from '../components/FixturesItem/FixturesItem';
import { IFixturesData } from '../components/FixturesItem/FixturesItem.models';
import styles from './FixturesScreen.styles';
import reactotron from 'reactotron-react-native';

export interface IItemProps {
  item: IFixturesData;
}

export default () => {
  const fixturesLoading = useStateSelector(u => u.fixtures.fixturesLoading);
  const fixtures = useStateSelector(u => u.fixtures.fixtures);
  const dispatch = useThunkDispatch();

  useEffect(() => {
    // When the screen first loads,
    // we fetch all the fixtures from the API
    dispatch(getFixturesAsync());
  }, [dispatch]);

  reactotron.log!('loading', fixturesLoading);
  reactotron.log!('fixtures', fixtures);

  const renderItem = ({ item }: ListItemRenderInfo<IFixturesData>) => (
    <FixturesItem fixturesData={item} />
  );

  // const fixturesItemPressed = () => {
  //   reactotron.log!('fixturesItemPressed');
  // };

  return (
    <ScreenWrapper>
      {/* Display data once fetched */}
      <FlatList
        keyExtractor={item => item.id}
        initialNumToRender={6}
        renderItem={renderItem}
        data={fixtures}
        style={styles.flatlist}
      />

      {/* Display loading indicator while data is being fetched */}
      {fixturesLoading && (
        <View style={styles.activityIndicator}>
          <ActivityIndicator />
        </View>
      )}
    </ScreenWrapper>
  );
};
