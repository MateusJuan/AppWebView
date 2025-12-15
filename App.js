import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicio from './screens/TelaInicio';
import TelaNoticia from './screens/TelaNoticia';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={TelaInicio} options={{ headerShown: false }} />
        <Stack.Screen name="Noticia" component={TelaNoticia} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
