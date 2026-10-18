import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import InfoScreen from './screens/InfoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6200EE'
          },
          headerTintColor: '#FFFFFF',
          headerTitleAlign: 'center',
          animation: 'slide_from_right'
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'მთავარი' }}
        />

        <Stack.Screen
          name="Info"
          component={InfoScreen}
          options={{ title: 'ინფორმაცია' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}