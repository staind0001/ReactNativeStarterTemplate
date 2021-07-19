/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import { StyleSheet, View,Image, FlatList, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { usePokemonPagination } from '../hooks/usePokemonPagination';
//import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../Theme/appTheme';
//import { NeomorphTextBox } from '../components/NeomorphTextBox';
//import { Neomorph } from 'react-native-neomorph-shadows';
//import { Button } from 'react-native-elements';
//import { FadeInImage } from '../components/FadeInImage';
import { PokemonCard } from '../components/PokemonCard';




export const HomeScreen = () => {

    //const {top} = useSafeAreaInsets();
    const {simplePokemonList,loadPokemons} = usePokemonPagination();
    

    return (

        <LinearGradient
        colors={['red','#a89f9f','#b53b3b']} 
        style={{...StyleSheet.absoluteFillObject }} 
        start={{x:0.2,y:0.2}}
        end={{x:0.9, y:0.9}}
        >

            <View>

            <Image 
            source={require('../assets/pokemon-logo-1.png')}
                style={{
                    height:150,
                    width:250,
                    marginLeft:-20,
                    top:-10,
                    marginBottom:-50
                }}
            />

            </View>

    <View style={{
                ...styles.glabalMargin,
                alignItems:'center',
                
            }}>
     
         <Image 
            source={require('../assets/Pokeball_icon-icons.com_67533.png')}
            style={styles.pokebolaBG}
         />


         <FlatList 
            data={simplePokemonList}
            numColumns={2}
            onEndReached={loadPokemons}
            onEndReachedThreshold={0.4}
            ListFooterComponent={(
            <ActivityIndicator 
                style={{height:100}}
                size={20}
                color="grey"
                />)}
            keyExtractor={(pokemon) => pokemon.id}
            showsVerticalScrollIndicator={false}
            renderItem={({
            item
            })=> ( <PokemonCard pokemon={item} />)
            }

            />
 
        </View>
       
    </LinearGradient>
 
    )
}



// style={{alignItems:'center', paddingTop:0,alignContent:'center'}}