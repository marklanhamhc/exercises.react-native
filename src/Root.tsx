import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import { HeaderMain } from './components/HeaderMain/HeaderMain';
import { Colors } from './config/Colors';
import { Fontello } from './config/Fontello';
import { FontStyles } from './config/FontStyles';
import FixturesScreen from './modules/fixtures/screens/FixturesScreen';
import HomeScreen from './modules/home/screens/HomeScreen';
import ProfileScreen from './modules/profile/screens/ProfileScreen';
import ShopScreen from './modules/shop/screens/ShopScreen';

type RootParamList = {
  Home: undefined;
  Fixtures: undefined;
  Store: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootParamList>();

export default () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          headerTitle: () => HeaderMain.headerTitle('Stadion FC'),
          headerStyle: {
            backgroundColor: Colors.generic.blueHavelock
          },
          headerTintColor: Colors.generic.white,
          tabBarIcon: tabInfo => {
            return (
              <Fontello
                name={'dashboard'}
                color={
                  tabInfo.focused
                    ? Colors.components.tabBarIcon.active
                    : Colors.components.tabBarIcon.default
                }
                style={styles.tabBarIcon}
              />
            );
          }
        }}
        component={HomeScreen}
      />

      <Tab.Screen
        name="Fixtures"
        options={{
          headerTitle: () => HeaderMain.headerTitle('Fixtures'),
          headerStyle: {
            backgroundColor: Colors.generic.blueHavelock
          },
          headerTintColor: Colors.generic.white,
          tabBarIcon: tabInfo => {
            return (
              <Fontello
                name={'list'}
                color={
                  tabInfo.focused
                    ? Colors.components.tabBarIcon.active
                    : Colors.components.tabBarIcon.default
                }
                style={styles.tabBarIcon}
              />
            );
          }
        }}
        component={FixturesScreen}
      />

      <Tab.Screen
        name="Store"
        options={{
          headerTitle: () => HeaderMain.headerTitle('Store'),
          headerStyle: {
            backgroundColor: Colors.generic.blueHavelock
          },
          headerTintColor: Colors.generic.white,
          tabBarIcon: tabInfo => {
            return (
              <Fontello
                name={'instore'}
                color={
                  tabInfo.focused
                    ? Colors.components.tabBarIcon.active
                    : Colors.components.tabBarIcon.default
                }
                style={styles.tabBarIcon}
              />
            );
          }
        }}
        component={ShopScreen}
      />

      <Tab.Screen
        name="Profile"
        options={{
          headerTitle: () => HeaderMain.headerTitle('Profile'),
          headerStyle: {
            backgroundColor: Colors.generic.blueHavelock
          },
          headerTintColor: Colors.generic.white,
          tabBarIcon: tabInfo => {
            return (
              <Fontello
                name={'profile'}
                color={
                  tabInfo.focused
                    ? Colors.components.tabBarIcon.active
                    : Colors.components.tabBarIcon.default
                }
                style={styles.tabBarIcon}
              />
            );
          }
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarIcon: {
    fontSize: 28
  }
});
