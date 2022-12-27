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
    const { pokemon, id, } = apiContext

    /////////

    const [listPokemon, pokemonImgMain, skills1, skills2] = useRequestDataApi(id)

    //Router-dom useNavigate()
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
                    <div>{skills1.name}</div>
                    <div>{skills2.name}</div>
                </article>

                <article>
                    <button onClick={()=> changeToDetails(navigate)}>Detalhes</button>
                    <button onClick={capturedPokemon}>{capture}</button>
                </article>
            </Card>
        </SectionMain>
    )
}