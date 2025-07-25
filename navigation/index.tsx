import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../screens/screen.types.ts';
import ScreenEnums from '../src/enums/screen-enums.js';
import HomeScreen from '../src/screens/Home/home.js';

type Props = {};

const {Screen, Navigator} = createNativeStackNavigator<RootStackParamList>();

const Navigation: FC<Props> = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={ScreenEnums.BOTTOM_TAB_STACK}>
        <Screen name={ScreenEnums.HOME} component={HomeScreen} />
        <Screen
          name={ScreenEnums.BOTTOM_TAB_STACK}
          component={UserActivation}
        />


      </Navigator>

    </NavigationContainer>
  );
};

export default Navigation;
