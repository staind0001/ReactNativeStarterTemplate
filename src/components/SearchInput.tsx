/* eslint-disable semi */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import { useState,useEffect } from 'react';
import { View, StyleProp, ViewStyle, StyleSheet, TextInput } from 'react-native';
//import { SearchBar } from 'react-native-elements';
//import LinearGradient from 'react-native-linear-gradient';
//import { useSafeAreaInsets } from 'react-native-safe-area-context';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useDebounceValue } from '../hooks/useDebounceValue';

interface Props {
    onDebounce: (value:string) => void;
    style?: StyleProp<ViewStyle>;
   
}




export const SearchInput = ({ style,onDebounce }:Props) => {

    const [value, setValue ]  = useState('');

    const debouncedValue = useDebounceValue(value);

    

    useEffect(() => {
        onDebounce(debouncedValue);
    }, [debouncedValue]);

    //console.log(value); 

    //const onClearText = () => setTextValue(textValue);
    


    

    //const {top} = useSafeAreaInsets();

    return (
      
        // <LinearGradient
        // colors={['red','#a89f9f','#b53b3b']} 
        // style={{...StyleSheet.absoluteFillObject }} 
        // start={{x:0.2,y:0.2}}
        // end={{x:0.9, y:0.9}}
        // >

        <View style={{...styles.container,
            ...style as any
        }}>


        <View style={styles.textBackground}>
        <TextInput 

            placeholder="Search Pokemon"
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
            value={value}
            onChangeText={setValue}

        />

        <Icon 
            name="search-outline"
            color="grey"
            size={30}
        />

        </View>
    
         </View>

        //</LinearGradient>
        
    )
}



const styles = StyleSheet.create({

    container: {
       // backgroundColor:'red',
    },
    textBackground:{
        backgroundColor:'#F3F1F3',
        borderRadius:50,
        height:80,
        paddingHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    textInput:{

        flex:1,
        fontSize:25,
        top: 2,
        fontFamily:'PokemonSolid',

    }
    
});
