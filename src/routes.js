import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '~/styles/colors';

/**
 * Paginas da aplicação
 */
import SignIn from '~/pages/SignIn';
import Deliveries from '~/pages/Deliveries';
import Profile from '~/pages/Profile';

const stackRoutes = [{ name: 'SignIn', component: SignIn }];
const tabRoutes = [
  { name: 'Deliveries', component: Deliveries },
  { name: 'Profile', component: Profile },
];

/**
 * Configurações globais das tabs navigations.
 */
const globalOptionsTab = {
  unmountOnBlur: true,
  keyboardHidesTabBar: true,
  activeTintColor: colors.primary,
  inactiveTintColor: colors.regularLight,
  style: {
    backgroundColor: colors.background,
    borderTopWidth: 0,
  },
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={globalOptionsTab}>
          {tabRoutes.map(({ name, component }) => (
            <Tab.Screen
              key={name}
              name={name}
              component={component}
              options={(options) => ({
                ...globalOptionsTab,
                ...(component.navigationOptions
                  ? component.navigationOptions(options)
                  : {}),
              })}
            />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export function SignRoutes() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn" headerMode="none">
          {stackRoutes.map(({ name, component }) => (
            <Stack.Screen key={name} name={name} component={component} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
