/* eslint-disable react-hooks/exhaustive-deps */

import { useState,useEffect,useRef } from "react"
import { pokemonApi } from "../api/pokemonApi";
import { PokemonFull } from '../interfaces/pokemonsInterfaces';


export const usePokemon = (id: string) => {

    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState<PokemonFull>({} as PokemonFull);
    
    const isMounted = useRef(true);

    const loadpokemon = async() =>{
        const resp = await pokemonApi.get<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(resp.data);
        setIsLoading(false);
    };

    useEffect(() => {
        loadpokemon();

        return () => {
            isMounted.current = false;
        };

    }, []);



    return{
        isLoading,
        pokemon,
    }
    
}
