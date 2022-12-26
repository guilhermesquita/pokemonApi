import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import {PokedexStyleDetail} from './style'

export const PokemonDetailPage = () =>{

    const context = useContext(GlobalContext);
    const {setNameButton} = context
    setNameButton('Excluir da Pokedex')

    return(
        <PokedexStyleDetail>
            <p>Detalhes do Pokemon</p>
        </PokedexStyleDetail>
    )
}
