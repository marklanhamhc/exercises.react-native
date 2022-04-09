import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import ScreenWrapper from '../../../components/ScreenWrapper';
import { useStateSelector, useThunkDispatch } from '../../../core/redux/hooks';
import { getFixturesAsync } from '../thunks';
import reactotron from 'reactotron-react-native';
import { FixturesItem } from '../components/FixturesItem/FixturesItem';
import styles from './FixturesScreen.styles';
import { IFixturesData } from '../components/FixturesItem/FixturesItem.models';

// export interface IItemProps {
//   item: IFixturesData;
// }

export default () => {
  const fixturesLoading = useStateSelector(u => u.fixtures.fixturesLoading);
  const fixtures = useStateSelector(u => u.fixtures.fixtures);
  const dispatch = useThunkDispatch();

  useEffect(() => {
    // When the screen first loads,
    // we fetch all the fixtures from the API
    dispatch(getFixturesAsync());
  }, [dispatch]);

  console.log('loading', fixturesLoading);
  console.log('fixtures', fixtures);

  reactotron.log!('loading', fixturesLoading);
  reactotron.log!('fixtures', fixtures);

  const renderItem = ({ item }) => <FixturesItem fixturesData={item} />;

  const fixturesItemPressed = () => {
    reactotron.log!('fixturesItemPressed');
  };

  return (
    <ScreenWrapper>
      {/* Display loading indicator while data is being fetched */}
      {fixturesLoading && <ActivityIndicator />}

      {/* Display data once fetched */}
      <FlatList
        keyExtractor={item => item.id}
        initialNumToRender={6}
        renderItem={renderItem}
        data={fixtures}
        style={styles.flatlist}
      />
    </ScreenWrapper>
  );
};
