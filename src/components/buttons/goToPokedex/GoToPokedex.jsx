import { GlobalContext } from '../../../context/GlobalContext'
import { useContext, useState } from 'react'
import {PokedexButton} from './style'

export const GoToPokedex = () => {
 
    const context = useContext(GlobalContext);
    const {nameButton, changePage} = context

    return(
        
        <PokedexButton onClick={changePage}>{nameButton}</PokedexButton>
        
    )
}