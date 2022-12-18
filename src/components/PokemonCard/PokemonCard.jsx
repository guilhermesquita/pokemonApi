import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../context/GlobalContext"
import { Card } from "./style"
import {changeToDetails} from '../../routes/coordinator'

export const PokemonCard = () => {

    const context = useContext(GlobalContext)
    const { capture, capturedPokemon } = context

    
    const navigate = useNavigate()

    return(
        <Card>
            <article>
                <button onClick={()=> changeToDetails(navigate)}>Detalhes</button>
                <button onClick={capturedPokemon}>{capture}</button>
            </article>
        </Card>
    )
}