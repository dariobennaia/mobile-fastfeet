import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '~/styles/colors';

import List from './List';
import Details from './Details';
import { ListProblems, SendProblem } from './Problems';
import Confirm from './Confirm';

const Stack = createStackNavigator();

function Deliveries() {
  function globalOptionsStack({ navigation }) {
    return {
      headerTitleAlign: 'center',
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerLeftContainerStyle: {
        margin: 20,
      },
      headerLeft: () => (
        <TouchableNativeFeedback onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={20} color={colors.white} />
        </TouchableNativeFeedback>
      ),
    };
  }

  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen
        name="List"
        component={List}
        options={(options) => ({
          ...globalOptionsStack(options),
          ...List.navigationOptions(options),
        })}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={(options) => ({
          ...globalOptionsStack(options),
          ...Details.navigationOptions(options),
        })}
      />

      <Stack.Screen
        name="ListProblems"
        component={ListProblems}
        options={(options) => ({
          ...globalOptionsStack(options),
          ...ListProblems.navigationOptions(options),
        })}
      />

      <Stack.Screen
        name="SendProblem"
        component={SendProblem}
        options={(options) => ({
          ...globalOptionsStack(options),
          ...SendProblem.navigationOptions(options),
        })}
      />

      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={(options) => ({
          ...globalOptionsStack(options),
          ...Confirm.navigationOptions(options),
        })}
      />
    </Stack.Navigator>
  );
}

Deliveries.navigationOptions = () => ({
  title: 'Entregas',
  tabBarIcon: ({ color }) => <Icon name="reorder" size={28} color={color} />,
});

export default Deliveries;
