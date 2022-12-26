import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../../context/GlobalContext"
import {BackButton} from './style'
import {changePageToList} from '../../../routes/coordinator'

export const GoToList = () => {

    const navigate = useNavigate()

    return(
        <BackButton onClick={() => changePageToList(navigate)}>&lt; Todos Pokémons</BackButton>
    )
}