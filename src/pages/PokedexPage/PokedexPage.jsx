import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import {PokedexStylePage} from './style'
import {useRequestDataApi} from '../../hooks/ResquestDataApi'

export const PokedexPage = () =>{

    const context = useContext(GlobalContext);
    const {setNameButton} = context
    setNameButton('Todos Pokémons')

    const [pokemonList, imgMain] = useRequestDataApi('')

    return(
        <PokedexStylePage>
            <p>Meus Pokémons</p>
        </PokedexStylePage>
    )
}