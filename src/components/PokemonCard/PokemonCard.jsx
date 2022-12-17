import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { Card } from "./style"

export const PokemonCard = () => {

    const context = useContext(GlobalContext)
    const {changePageToTrash, capture, capturedPokemon} = context

    return(
        <Card>
            <button onClick={changePageToTrash}>Detalhes</button>
            <button onClick={capturedPokemon}>{capture}</button>
        </Card>
    )
}