import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, TouchableOpacity } from 'react-native';
import HomeNavigation from '../src/views/user/HomeNavigation';
import AnalyticsNavigation from '../src/views/user/AnalyticsNavigation';
import HomeIcon from '../src/assets/icons/home_icon.svg';
import AnalyticsIcon from '../src/assets/icons/analytics_icon.svg';
import ScreenEnums from '../src/enums/screen-enums';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { ms } from 'react-native-size-matters';
import EmptyComponent from './EmptyComponent';
import PlusIcon from "../src/assets/icons/plus_icon.svg"

const Tab = createBottomTabNavigator();

const UserNavigation: FC = () => {
  const activeColor = '#005EE8';
  const inactiveColor = '#FFFFFF';
  const inActiveStrokeColor = '#667085';

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inActiveStrokeColor,
        tabBarActiveBackgroundColor: '#ffffff',
        tabBarInactiveBackgroundColor: '#ffffff',
        tabBarLabelStyle: {
          fontSize: ms(12),
          marginBottom: Platform.OS === 'android' ? 7 : 0,
        },
        tabBarIcon: ({ focused }) => {
          const iconProps = {
            fill: focused ? activeColor : inactiveColor,
            stroke: focused ? 'white' : inActiveStrokeColor,
            width: 24,
            height: 24,
          };

          switch (route.name) {
            case 'Home':
              return <HomeIcon {...iconProps} />;
            case 'Analytics':
              return <AnalyticsIcon {...iconProps} />;
            default:
              return null;
          }
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? '';
          const hiddenRoutes = [ScreenEnums.ADD_EXPENSE, ScreenEnums.TRANSACTIONS];

          return {
            headerShown: false,
            tabBarStyle: {
              display: hiddenRoutes.includes(routeName) ? 'none' : 'flex',
            },
          };
        }}
      />

      {/* Custom Floating Add Button */}
      <Tab.Screen
        name="Add"
        component={EmptyComponent}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => null,
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={{
                position: 'absolute',
                bottom: Platform.OS === 'ios' ? 20 : 10,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                width: ms(60),
                height: ms(60),
                borderRadius: ms(30),
               
              }}
              onPress={() => {
                // Navigate or open modal
              }}
            >
              <PlusIcon width={ms(54)} height={ms(54)} />
            </TouchableOpacity>
          ),
                  }}
      />

      <Tab.Screen
        name="Analytics"
        component={AnalyticsNavigation}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? '';
          const hiddenRoutes = [ScreenEnums.ADD_EXPENSE, ScreenEnums.TRANSACTIONS];

          return {
            headerShown: false,
            tabBarStyle: {
              display: hiddenRoutes.includes(routeName) ? 'none' : 'flex',
            },
          };
        }}
      />
    </Tab.Navigator>
  );
};

export default UserNavigation;
