/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { PokemonScreen } from "../screens/PokemonScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { RootStackParams } from "./Tab1";




const TabSearch = createStackNavigator<RootStackParams>();

 export const tabSearchScreen = () => {
  return (
    <TabSearch.Navigator
    screenOptions={{
        headerShown:false,
    }}
    >
      <TabSearch.Screen name="HomeScreen" component={SearchScreen} />
      <TabSearch.Screen name="PokemonScreen" component={PokemonScreen} />

    </TabSearch.Navigator>
  );
}