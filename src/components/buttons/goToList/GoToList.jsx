import { useContext } from "react"
import { GlobalContext } from "../../../context/GlobalContext"
import {BackButton} from './style'

export const GoToList = () => {

    const context = useContext(GlobalContext);
    const {nameButton, changePage} = context

    return(
        <div>
        <BackButton onClick={changePage}>&lt; {nameButton}</BackButton>
        </div>
    )
}