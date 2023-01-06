import { useContext, useState } from 'react';
import {PokemonCard} from '../../components/PokemonCard/PokemonCard'
import { GlobalContext } from '../../context/GlobalContext';
import {ListPage} from './style'
import {useRequestDataApi} from '../../hooks/ResquestDataApi'
import { ApiContext } from '../../context/ApiContext';

export const PokemonListPage = () => {

    const context = useContext(GlobalContext);
    const { setNameButton, pokedex, idPok } = context
    setNameButton('Pokédex')

    const [pokemonList] = useRequestDataApi('')
    
    const pokedexClone = [...pokedex]

    for(let i = 0; i<20; i++){
        pokedexClone.push(i)
    }

    return(
        <ListPage>
            <p>Todos Pokémons</p>
            <article>
               {pokemonList.filter((pokemon, index)=>{
                    return pokedex.length === 0 ? <></> : pokemon !== idPok
               })
               .map((pokemon, index)=>{

                    const apiContext = 
                    {
                        pokemon: pokemon,
                        id: index + 1,
                    }   

                    return(
                        <ApiContext.Provider value={apiContext} key={index}>
                            <PokemonCard key={index}/>
                        </ApiContext.Provider>)
                })}
            </article>
        </ListPage>
    )
}