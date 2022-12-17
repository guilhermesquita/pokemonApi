import { useContext } from "react"
import { GlobalContext } from "../../../context/GlobalContext"
import {BackButton} from './style'

export const GoToList = () => {

    const context = useContext(GlobalContext);
    const {nameButton, changePageToList} = context

    return(
        <BackButton onClick={changePageToList}>&lt; Todos Pokémons</BackButton>
    )
}