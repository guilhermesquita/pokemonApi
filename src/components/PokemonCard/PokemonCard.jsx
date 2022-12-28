import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../context/GlobalContext"
import { Card, SectionMain, Grass, Poison, Fire, Flying } from "./style"
import {changeToDetails} from '../../routes/coordinator'
import { ApiContext } from "../../context/ApiContext"
import {useRequestDataApi} from '../../hooks/ResquestDataApi'
import pokeballBack from '../../assets/pngwing.svg'
import grass from '../../assets/grass.svg'

export const PokemonCard = () => {
    
    //GlobalContext
    const context = useContext(GlobalContext)
    const { capture, capturedPokemon } = context

    //ApiContext
    const apiContext = useContext(ApiContext)
    const { pokemon, id } = apiContext

    /////////

    const [listPokemon, pokemonImgMain, skills1, skills2] = useRequestDataApi(id)

    //Router-dom useNavigate()
    const navigate = useNavigate()

    const types1 = (skill) => {
        if(skill.name === 'grass'){
            return(
            <Grass>
                {/* <img src={grass}/> */}
                {skill.name}
            </Grass>)
        } else if(skill.name === 'poison'){
            return(
            <Poison>
                {/* <img src={grass}/> */}
                {skill.name}
            </Poison>)
        } else if(skill.name === 'fire'){
            return(
            <Fire>
                {/* <img src={grass}/> */}
                {skill.name}
            </Fire>)
        } else if(skill.name === 'flying'){
            return(
            <Flying>
                {/* <img src={grass}/> */}
                {skill.name}
            </Flying>)
        }
    }

    const types2 = (skill) => {
        if(skill.name === 'grass'){
            return(
            <Grass>
                {/* <img src={grass}/> */}
                {skill.name}
            </Grass>)
        } else if(skill.name === 'poison'){
            return(
            <Poison>
                {/* <img src={grass}/> */}
                {skill.name}
            </Poison>)
        } else if(skill.name === 'fire'){
            return(
            <Fire>
                {/* <img src={grass}/> */}
                {skill.name}
            </Fire>)
        } else if(skill.name === 'flying'){
            return(
            <Flying>
                {/* <img src={grass}/> */}
                {skill.name}
            </Flying>)
        }
    }


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
                    {types2(skills2)}
                    {types1(skills1)}
                </article>

                <article>
                    <button onClick={()=> changeToDetails(navigate)}>Detalhes</button>
                    <button onClick={capturedPokemon}>{capture}</button>
                </article>
            </Card>
        </SectionMain>
    )
}