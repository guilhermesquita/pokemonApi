import { useContext } from "react"
import { GlobalContext } from "../../../context/GlobalContext"

export const GoToList = () => {

    const context = useContext(GlobalContext);
    const {nameButton, changePage} = context

    return(
        <button>csdd</button>
    )
}