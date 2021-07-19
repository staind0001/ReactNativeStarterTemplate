/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
import React from 'react';
import { View,ActivityIndicator, Platform, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export const Loading = () => {
 
    const {top} = useSafeAreaInsets();


    return (
        (
            <View
               
                 style={{
                     flex:1,
                     marginTop: (Platform.OS === 'ios') ? top : top + 10,
                     justifyContent:'center',
                     alignItems:'center'
                 }}
            >
 
                <ActivityIndicator 
                     size={150}
                     color='grey'
                />
 
                <Text
                     style={{
                         fontFamily:'PokemonSolid',
                         letterSpacing:5,
                         color:'grey'
                     }}
                >
                    Loading Pokemons...
                </Text>
 
            </View>
        )
    )
}
