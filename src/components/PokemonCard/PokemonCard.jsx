import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../context/GlobalContext"
import { Card } from "./style"
import {changeToDetails} from '../../routes/coordinator'

export const PokemonCard = (props) => {

    const context = useContext(GlobalContext)
    const { capture, capturedPokemon } = context

    const navigate = useNavigate()

    return(
        <Card>
            <header>
                {props.pokemon.name}
            </header>
            <article>
                <button onClick={()=> changeToDetails(navigate)}>Detalhes</button>
                <button onClick={capturedPokemon}>{capture}</button>
            </article>
        </Card>
    )
}