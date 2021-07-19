/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonsInterfaces';
//import LinearGradient from 'react-native-linear-gradient';
import { FadeInImage } from './FadeInImage';
import { useNavigation } from '@react-navigation/native';


interface Props {
    pokemon: PokemonFull;
}

export const PokemonDetails = ({pokemon}: Props) => {

    const navigation = useNavigation();

    return (
       <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                ...StyleSheet.absoluteFillObject,
            }}
       >

        <View style={{
               ...styles.container,
               marginTop:550,
           }}>

           <Text style={styles.title}>Types</Text>

           <View style={{flexDirection:'row'}}>
          
               {
                   pokemon.types.map(({type})=>(
                        <Text
                            style={{
                                ...styles.regularText,
                                marginRight:10,
                            }}
                            key={type.name} 
                        >
                            {type.name}
                        </Text>
                   ))
               }
          
            </View>

            <Text style={styles.title}>Weight</Text>
            <Text style={styles.regularText}>{pokemon.weight } Kg </Text>


        </View>


        <View style={styles.container}>
        <Text style={styles.title}>Sprites</Text>
        </View>

        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <FadeInImage 
                uri={pokemon.sprites.front_default}
                style={styles.basicSprite}
            />

            <FadeInImage 
                uri={pokemon.sprites.back_default}
                style={styles.basicSprite}
            />

            <FadeInImage 
                uri={pokemon.sprites.front_shiny}
                style={styles.basicSprite}
            />

            <FadeInImage 
                uri={pokemon.sprites.back_shiny}
                style={styles.basicSprite}
            />

        </ScrollView>

        <View style={styles.container}>

           <Text style={styles.title}>Basic Skills</Text>
           <View style={{flexDirection:'row'}}>
          
          {
              pokemon.abilities.map(({ability})=>(
                   <Text
                       style={{
                           ...styles.regularText,
                           marginRight:10,
                    }}
                       key={ability.name} 
                   >
                       { ability.name }
                   </Text>
              ))
          }
     
        </View>
        </View>


    <View style={styles.container}>

    <Text style={styles.title}>Moves</Text>
    <View style={{flexDirection:'row', flexWrap:'wrap'}}>

    {
    pokemon.moves.map(({move})=>(
            <Text
                style={{
                    ...styles.regularText,
                    marginRight:10,
            }}
                key={move.name} 
            >
                { move.name }
            </Text>
    ))
    }

    </View>
    </View>


    <View style={styles.container}>

    <Text style={styles.title}>Statics</Text>
    <View>

    {
    pokemon.stats.map((stat ,i)=>(
         <View key={stat.stat.name + i}
            style={{flexDirection:'row'}}
         >
            <Text
                style={{
                    ...styles.title,
                    marginRight:80,
                    width:200,
                   
            }}
                key={stat.stat.name} 
            >
                { stat.stat.name }
            </Text>

            <Text
                style={{
                    ...styles.regularText,
                    fontSize:25,
                    top:20
            }}
            >
                { stat.base_stat }
            </Text>
         </View>
    ))
    }

    </View >

        <View style={{
            marginBottom:20,
            alignItems:'center',
        }}>

        <TouchableOpacity
             onPress={ 
                () => navigation.goBack()
            }
        >

        <Image
            style={{
            height:300,
            width:300,
            }}
            source={ require('../assets/pokemon-logo-1.png')}
            
        />

        </TouchableOpacity>

        </View>

    </View>



        
       </ScrollView>
    )
}

const styles = StyleSheet.create({

    container:{
        marginHorizontal:20
    },
    title:{
        fontSize:25,
        fontFamily:'PokemonSolid',
        letterSpacing:5,
        marginTop:20
    },
    regularText:{
        fontSize:17,
        fontFamily:'PokemonSolid',
        letterSpacing:3,
        opacity:0.7
    },
    basicSprite:{
        width:100,
        height:100,
    }
    
});