import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../context/GlobalContext"
import { Card } from "./style"
import {changeToDetails} from '../../routes/coordinator'
import { ApiContext } from "../../context/ApiContext"
import {useRequestDataApi} from '../../hooks/ResquestDataApi'

export const PokemonCard = () => {
    
    //GlobalContext
    const context = useContext(GlobalContext)
    const { capture, capturedPokemon } = context

    //ApiContext
    const apiContext = useContext(ApiContext)
    const { pokemon, id } = apiContext

    const [listPokemon, pokemonImgMain] = useRequestDataApi(id)

    const navigate = useNavigate()

    return(
        <Card>
            <header>
                #0{id}<br/>
                {pokemon.name}
            </header>

            <article>
                <img src={pokemonImgMain} width='30%'/>
            </article>

            <article>
                <button onClick={()=> changeToDetails(navigate)}>Detalhes</button>
                <button onClick={capturedPokemon}>{capture}</button>
            </article>
        </Card>
    )
}