import { useContext } from 'react'
import pokemon from '../../assets/pokemonlogo.svg'
import { GlobalContext } from '../../context/GlobalContext'
import { HeaderGlobal } from './style'
import {GoToList} from '../buttons/goToList/GoToList'
import { GoToPokedex } from '../buttons/goToPokedex/GoToPokedex.jsx'
import { TrashPokemon } from '../buttons/trashPokemon/TrashPokemon'
import { useNavigate } from 'react-router-dom'
import { changePageToList } from '../../routes/coordinator'

export const Header = () => {

    const navigate = useNavigate()

    const context = useContext(GlobalContext);
    const { nameButton } = context

    return (
    <HeaderGlobal>
        <article>
        {nameButton === "Todos Pokémons" || nameButton === "Excluir da Pokedex" ? <GoToList/> : <></>}
        </article>
        <img src={pokemon} width='200' onClick={()=>changePageToList(navigate)}/>
        {nameButton === "Pokédex" ? <GoToPokedex/> : <></>}
        {nameButton === "Excluir da Pokedex" ? <TrashPokemon/> : <></>}
    </HeaderGlobal>
    )
}