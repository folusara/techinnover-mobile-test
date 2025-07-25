import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenEnums from '../../enums/screen-enums';
import AnalyticsScreen from '../../screens/Analytics/Analytics';

const AnalyticsNavigation: FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={ScreenEnums.ANALYTICS}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ScreenEnums.ANALYTICS} component={AnalyticsScreen} />
    </Stack.Navigator>
  );
};

export default AnalyticsNavigation;
