import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../context/GlobalContext"
import { Card, SectionMain } from "./style"
import {changeToDetails} from '../../routes/coordinator'
import { ApiContext } from "../../context/ApiContext"
import {useRequestDataApi} from '../../hooks/ResquestDataApi'
import pokeballBack from '../../assets/pngwing.svg'

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
        <SectionMain>
            <img src={pokemonImgMain} width={'40%'}/>
            <Card>
                <img src={pokeballBack} height={'100%'} width={'65%'}/>
                <header>
                    <span>#0{id}</span>
                    <h2>{pokemon.name}</h2>
                </header>
                
                <article>
                    <div>skill1</div>
                    <div>skill2</div>
                </article>

                <article>
                    <button onClick={()=> changeToDetails(navigate)}>Detalhes</button>
                    <button onClick={capturedPokemon}>{capture}</button>
                </article>
            </Card>
        </SectionMain>
    )
}