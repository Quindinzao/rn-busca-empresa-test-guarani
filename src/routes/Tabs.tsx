/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import Home from '../screens/Home';
import AddCNPJ from '../screens/AddCNPJ';
import { useTheme } from '@emotion/react';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.colorLabel,
        tabBarStyle: {
          backgroundColor: theme.colors.backgroundApp,
          borderTopColor: theme.colors.borderTextInput,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName: any;

          switch (route.name) {
            case 'Home':
              iconName = 'house';
              break;
            case 'Add CNPJ':
              iconName = 'plus';
              break;
            default:
              iconName = 'xmark';
          }

          return <FontAwesome6 name={iconName} color={color} size={size} iconStyle="solid" />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Add CNPJ" component={AddCNPJ} />
    </Tab.Navigator>
  );
};

export default Tabs;
