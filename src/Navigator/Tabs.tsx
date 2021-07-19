/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
import  React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1 } from './Tab1';

import { Platform } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';


import { tabSearchScreen } from './TabSearch';

const Tab = createBottomTabNavigator();



export const Tabs = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor:'white'
        }}
        tabBarOptions={{
            activeTintColor:'black',
            labelStyle:{
                marginBottom:(Platform.OS === 'ios') ? 2 : 15,
            },

            style:{
                position:'absolute',
                backgroundColor:'rgba(255,255,255,0.7)',
                borderWidth:0,
                elevation:0,
                height:(Platform.OS === 'ios') ? 2 : 60,
            }
        }}
    >
      <Tab.Screen 
        name="HomeScreen" 
        component={Tab1}
        options=
        {{tabBarLabel:
            'Pokemon List',
            
            tabBarIcon: ({color,}) => (
            <Icon 
            color={color} 
            size={30} 
            name={"list-outline"}
            />
            
            )
        }}
         />
      <Tab.Screen 
        name="SearchScreen" 
        component={tabSearchScreen}
        options=
        {{tabBarLabel:
            'Find Pokemons',
            
            tabBarIcon: ({color,}) => (
            <Icon 
            color={color} 
            size={30} 
            name={"search-outline"}
            />
            
            )
        }} />
    </Tab.Navigator>
  );
}