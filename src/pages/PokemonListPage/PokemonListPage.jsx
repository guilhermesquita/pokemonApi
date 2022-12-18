import { useContext } from 'react';
import {PokemonCard} from '../../components/PokemonCard/PokemonCard'
import { GlobalContext } from '../../context/GlobalContext';
import {ListPage} from './style'

export const PokemonListPage = () => {

    const context = useContext(GlobalContext);
    const {setNameButton} = context
    setNameButton('Pokédex')

    return(
        <ListPage>
            <p>Todos Pokémons</p>
            <PokemonCard/>
        </ListPage>
    )
}