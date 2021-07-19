/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable space-infix-ops */
import React, { useEffect, useState } from 'react';
import {  View, Platform, FlatList,Dimensions, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../components/Loading';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { SimplePokemon } from '../interfaces/pokemonsInterfaces';
import LinearGradient from 'react-native-linear-gradient';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {

   const {top} = useSafeAreaInsets();

   const {isFetching,simplePokemonList} = usePokemonSearch();

   const [pokemonFilter, setPokemonFilter] = useState<SimplePokemon[]>([]);

   const [term, setTerm] = useState('');

   useEffect(() => {
    if(term.length === 0){
        return setPokemonFilter([]);
    }
    
    if ( isNaN( Number(term)) ){
        
    setPokemonFilter(
        simplePokemonList.filter(
            ( poke )=> poke.name.toLowerCase()
            .includes( term.toLowerCase() ) )
    );
    } else {
        const pokemonById = simplePokemonList.find(poke => poke.id === term )

        setPokemonFilter(
           ( pokemonById ) ? [pokemonById] : []
        )
    }
       
      
   }, [term]);

   {
       
   }

   if(isFetching){
       return <Loading />
   }




    return (

        
        <LinearGradient
        colors={['blue','#a89f9f','red']} 
        style={{...StyleSheet.absoluteFillObject }} 
        start={{x:0.2,y:0.2}}
        end={{x:0.9, y:0.9}}
        >
        

        <View style={{
            flex:1,
            marginHorizontal:20,
            // marginTop: (Platform.OS === 'ios') ? top : top + 10,
            zIndex:999
        }}>
            
            <SearchInput
              onDebounce={(val)=> setTerm(val) } 
                style={{
                    position:'absolute',
                    zIndex:999,
                    width:screenWidth - 40,
                    top: (Platform.OS === 'ios') ? top : top + 70,
                    opacity:1
                    
                }}
            />
            {/* <View style={{
                alignContent:'center',
                alignItems:'center',
                
            }}> */}
        
            <FlatList 
            data={pokemonFilter}
            numColumns={2}
            ListHeaderComponent={(
                <Text
                    style={{
                        top:top+20,
                        marginBottom:top+60,
                        paddingBottom:30,
                        fontSize:30,
                        fontFamily:'PokemonSolid',
                        color:'red',
                    }}
                >
                    {term}
                </Text>
            )}
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
