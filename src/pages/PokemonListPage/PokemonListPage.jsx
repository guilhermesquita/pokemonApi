import { useContext } from 'react';
import {PokemonCard} from '../../components/PokemonCard/PokemonCard'
import { GlobalContext } from '../../context/GlobalContext';
import {ListPage} from './style'
import {useRequestDataApi} from '../../hooks/ResquestDataApi'

export const PokemonListPage = () => {

    const context = useContext(GlobalContext);
    const {setNameButton} = context
    setNameButton('Pokédex')

    const pokemonList = useRequestDataApi()

    return(
        <ListPage>
            <p>Todos Pokémons</p>
            <article>
                {pokemonList.map((pokemon, index)=>{
                    return <PokemonCard pokemon={pokemon} key={index}/>
                })}
            </article>
        </ListPage>
    )
}