/* eslint-disable no-trailing-spaces */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { pokemonApi } from "../api/pokemonApi";
import { PokemonPaginationResponse, Result, SimplePokemon } from '../interfaces/pokemonsInterfaces';


export const usePokemonSearch = () => {
   
    const [isFetching, setIsFetching] = useState(true);

    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);

   

    const loadPokemons = async() => {

        const resp = await pokemonApi.get<PokemonPaginationResponse>('https://pokeapi.co/api/v2/pokemon?limit=1200');


        mapPokemonlist(resp.data.results);

       

    };

    const mapPokemonlist = (pokemonList:Result[]) => {

       const newPokemonList: SimplePokemon[] = pokemonList.map(({name, url})=>{

        const urlParts = url.split('/');

        const id = urlParts [urlParts.length - 2 ];

        const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

        //console.log(picture)
        return {id,picture,name};
           
       });

       setSimplePokemonList(newPokemonList);
       setIsFetching(false);

    }


    useEffect(() => {
        loadPokemons();
    }, [])


    return {
        isFetching,
        simplePokemonList,
    
    }
}
