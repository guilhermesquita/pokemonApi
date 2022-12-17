import { useContext, useState } from 'react'
import pokemon from '../../assets/pokemonlogo.svg'
import { GlobalContext } from '../../context/GlobalContext'
import { HeaderGlobal } from './style'
import {GoToList} from '../buttons/goToList/GoToList'
import { GoToPokedex } from '../buttons/goToPokedex/goToPokedex'
import { TrashPokemon } from '../buttons/trashPokemon/TrashPokemon'

export const Header = () => {

    const context = useContext(GlobalContext);
    const { nameButton, nameButtonDetail } = context

    return (
    <HeaderGlobal>
        <article>
        {nameButton === "Todos Pokémons" || nameButton === "Excluir da Pokedex" ? <GoToList/> : <></>}
        </article>
        <img src={pokemon} width='200'/>
        {nameButton === "Pokédex" ? <GoToPokedex/> : <></>}
        {nameButton === "Excluir da Pokedex" ? <TrashPokemon/> : <></>}
    </HeaderGlobal>
    )
}