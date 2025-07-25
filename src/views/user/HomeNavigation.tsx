import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/Home/home';
import Transactions from '../../screens/Home/transactions';
import ScreenEnums from '../../enums/screen-enums';
import AddExpenseScreen from '../../screens/Home/addExpense';
const HomeNavigation: FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={ScreenEnums.HOME}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen  options={{ headerShown: false }} name={ScreenEnums.HOME} component={HomeScreen} />
        <Stack.Screen  options={{ headerShown: false }} name={ScreenEnums.ADD_EXPENSE} component={AddExpenseScreen} />
      <Stack.Screen  options={{ headerShown: false }} name={ScreenEnums.TRANSACTIONS} component={Transactions} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
