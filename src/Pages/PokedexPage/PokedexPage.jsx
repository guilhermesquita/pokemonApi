import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import {PokedexStylePage} from './style'

export const PokedexPage = () =>{

    const context = useContext(GlobalContext);
    const {setNameButton} = context
    setNameButton('Todos Pokémons')

    return(
        <PokedexStylePage>
            <p>Meus Pokémons</p>
        </PokedexStylePage>
    )
}