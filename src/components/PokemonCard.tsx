/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */

import React, { useState,useEffect, useRef } from 'react'
import { View,Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonsInterfaces';
import { Neomorph } from 'react-native-neomorph-shadows';
import { styles } from '../Theme/appTheme';
import { FadeInImage } from './FadeInImage';
import ImageColors from 'react-native-image-colors'
import { useNavigation } from '@react-navigation/native';


const windowWidth = Dimensions.get('window').width


interface Props{
    pokemon: SimplePokemon;
}

export const PokemonCard = ( {pokemon}:Props ) => {

    const [bgColor, setBgColor] = useState('transparent');

    const isMounted = useRef(true);

    const navigation =  useNavigation();

    useEffect(() => {

     ImageColors.getColors(pokemon.picture , { fallback:'transparent' })

     .then( colors => {

        if ( !isMounted.current) return;

        ( colors.platform === 'android' )
            ?  setBgColor(colors.dominant || 'transparent')
            :  setBgColor(colors.background || 'transparent')
     });

     return () => {
         isMounted.current = false;
     };
     
    }, [] );


    return (
        <View style={{top:0,marginTop:50}}>
        <TouchableOpacity 
            onPress={ 
                () => navigation.navigate('PokemonScreen', {
                    simplePokemon: pokemon,
                    color:bgColor,
                })
                }
        >
            <Neomorph
                inner={true} // <- enable shadow inside of neomorph
                swapShadows={true} // <- change zIndex of each shadow color
                style={{
                    
            shadowRadius: 5,
            borderRadius: 50,
            backgroundColor: bgColor,
            width: windowWidth * 0.4,
            height: 140,
            alignContent:'center',
            alignItems:'center',
            marginHorizontal:10,
            marginVertical:5,

            }}
            >

        </Neomorph> 
            <View style={{alignContent:'center',alignItems:'center',flex:1}} >
                    <Text style={styles.name}> {pokemon.name} {'\n#' + pokemon.id} </Text>
            </View>

            <Image 
                source={ require('../assets/Pokeball_icon-icons.com_67448.png')}
                style={styles.pokebola}
            />

            <Image 
                source={ require('../assets/pokebola-blanca.png')}
                style={styles.logo}
            />

            <FadeInImage 
                    uri={pokemon.picture}
                    style={styles.pokemon}
            />

        </TouchableOpacity>
        </View>
    )
}



// const styles = StyleSheet.create({
//     cardContainer:{
//         marginHorizontal:10,
//         backgroundColor:'red',
//         height:120,
//         width:160,
//         marginBottom:25,
//         borderRadius:10,
//     }
    
// });