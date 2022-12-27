import { useContext, useState } from 'react';
import {PokemonCard} from '../../components/PokemonCard/PokemonCard'
import { GlobalContext } from '../../context/GlobalContext';
import {ListPage} from './style'
import {useRequestDataApi} from '../../hooks/ResquestDataApi'
import { ApiContext } from '../../context/ApiContext';

export const PokemonListPage = () => {

    const context = useContext(GlobalContext);
    const {setNameButton} = context
    setNameButton('Pokédex')

    const [pokemonList, imgMain] = useRequestDataApi('')
    
    return(
        <ListPage>
            <p>Todos Pokémons</p>
            <article>
               {pokemonList.map((pokemon, index)=>{
                
                    const apiContext = 
                    {
                        pokemon: pokemon,
                        id: index + 1
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