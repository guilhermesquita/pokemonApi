import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import {PokedexStyleDetail} from './style'
import {useRequestDataApi} from '../../hooks/ResquestDataApi'

export const PokemonDetailPage = () =>{

    const [pokemonList, imgMain, loadingPokemon] = useRequestDataApi('')

    const context = useContext(GlobalContext);
    const {setNameButton, namePokemon } = context
    setNameButton('Excluir da Pokedex')

    return(
        <PokedexStyleDetail>
            <p>Detalhes do Pokemon</p>
            <div>
                <p>{namePokemon}</p>
            </div>
        </PokedexStyleDetail>
    )
}