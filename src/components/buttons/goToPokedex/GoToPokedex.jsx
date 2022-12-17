import { GlobalContext } from '../../../context/GlobalContext'
import { useContext} from 'react'
import {PokedexButton} from './style'

export const GoToPokedex = () => {
 
    const context = useContext(GlobalContext);
    const {nameButton, changePageToPokedex} = context

    return(
        
        <PokedexButton onClick={changePageToPokedex}>{nameButton}</PokedexButton>
        
    )
}