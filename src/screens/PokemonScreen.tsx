/* eslint-disable react/self-closing-comp */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */

import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParams } from '../Navigator/Tab1';
//import { Neomorph } from 'react-native-neomorph-shadows';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';


interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {};

export const PokemonScreen = ( {navigation, route} : Props) => {

    const {simplePokemon,color} = route.params;

    const { id,name,picture} = simplePokemon;

    const {top} = useSafeAreaInsets();

    const {isLoading,pokemon } = usePokemon(id);

    



    return (

        <View style={{flex:1}}>
            <View style={{
                ...stylePS.headerContainer,
                backgroundColor:color,

            }}>
                <TouchableOpacity 
                activeOpacity={0.8}
                style={{
                    ...stylePS.btnBack,
                    top: top + 10,
                }}
                onPress={ 
                    () => navigation.pop()
                }
                >
                    <Image 
                    style={{
                        height:60,
                        width:60,
                    }}
                    source={ require('../assets/Pokemon_Arrow.png')}
            
                />

                </TouchableOpacity>

                <Text
                    style={{
                        ...stylePS.pokemonName,
                    }}
                >
                    { name }
                    </Text>

                    <Text
                        style={{...stylePS.pokemonId}}
                    >#{id}</Text>

                    <Image 
                    style={{
                        ...stylePS.pokedex
                    
                    }}
                    source={ require('../assets/pokemon_go_play_game_cinema_film_movie_icon-icons.com_69163.png')}
            
                    />

                    <FadeInImage 
                        uri={picture}
                        style={stylePS.pokemonImage}
                    />

            </View>

            {
                isLoading 
                ?
                (
                    <View style={stylePS.activityIndicator} >
                        <ActivityIndicator 
                            color={color}
                            size={150}
                        />

                    </View>
                )
                :
                <PokemonDetails pokemon={pokemon} />
            }



        </View>





        
    )
}




const stylePS = StyleSheet.create({
    headerContainer:{
        height:370,
        zIndex:999,
        alignItems:'center',
        borderBottomLeftRadius:1000,

        
    },
    btnBack:{
        height:60,
        width:70,
        position:'absolute',
        left:20,
        top:-450,
       
    },
    pokemonName:{
        color:'black',
        fontFamily:'PokemonSolid',
        fontSize:40,
        alignSelf:'flex-end',
        right:20,
        top:50,
        letterSpacing:5
    },
    pokemonId:{
        color:'black',
        fontFamily:'PokemonSolid',
        fontSize:89,
        alignSelf:'flex-end',
        right:20,
        opacity:0.8,
        letterSpacing:20,
        bottom:-15
    },
    pokedex:{
        height:200,
        width:200,
        left:105,
        bottom:10
    },
    pokemonImage:{
        width:250,
        height:250,
        position:'absolute',
        top:170,
        
    },
    activityIndicator:{
        flex:1,
        justifyContent:'center',
        top:50,
    }
    
});
