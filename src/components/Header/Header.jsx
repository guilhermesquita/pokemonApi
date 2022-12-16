import { useContext, useState } from 'react'
import pokemon from '../../assets/pokemonlogo.svg'
import { GlobalContext } from '../../context/GlobalContext'
import { HeaderGlobal } from './style'
import {GoToList} from '../buttons/goToList/GoToList'
import { GoToPokedex } from '../buttons/goToPokedex/goToPokedex'

export const Header = () => {

    const context = useContext(GlobalContext);
    const { nameButton, changePage } = context

    return (
    <HeaderGlobal>
        {nameButton === "Pokedex" ? <GoToPokedex/> : <GoToList/>}
        <img src={pokemon} width='200'/>
    </HeaderGlobal>
    )
}