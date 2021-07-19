import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { SimplePokemon } from '../interfaces/pokemonsInterfaces';
import { PokemonScreen } from '../screens/PokemonScreen';


export type RootStackParams = {
  HomeScreen: undefined,
  PokemonScreen:{simplePokemon:SimplePokemon, color: string}
}

const Stack = createStackNavigator<RootStackParams>();

 export const Tab1 = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false,
    }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />

    </Stack.Navigator>
  );
}