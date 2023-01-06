import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../context/GlobalContext"
import { Card, SectionMain, Grass, Poison, Fire, Flying, Water, Bug, Normal, PokemonPhoto, PokeballBack } from "./style"
import { changeToDetails } from '../../routes/coordinator'
import { ApiContext } from "../../context/ApiContext"
import { useRequestDataApi } from '../../hooks/ResquestDataApi'
import pokeballBack from '../../assets/pngwing.svg'
import grass from '../../assets/vetorTypes/grass.svg'
import poison from '../../assets/vetorTypes/poison.svg'
import fire from '../../assets/vetorTypes/fire.svg'
import flying from '../../assets/vetorTypes/flying.svg'
import water from '../../assets/vetorTypes/water.svg'
import bug from '../../assets/vetorTypes/bug.svg'
import normal from '../../assets/vetorTypes/normal.svg'

export const PokemonCard = () => {

    //GlobalContext
    const context = useContext(GlobalContext)
    const { setName, idPok, setIdPok, addToPokedex } = context

    //ApiContext
    const apiContext = useContext(ApiContext)
    const { pokemon, id } = apiContext

    /////////
    const [listPokemon, pokemonImgMain, skills1, skills2] = useRequestDataApi(id)
    const [pokemonList] = useRequestDataApi('')

    //Router-dom useNavigate()
    const navigate = useNavigate()

    const types1 = (skill) => {
        if (skill.name === 'grass') {
            return (
                <Grass>
                    <img src={grass} /> 
                    {skill.name}
                </Grass>)
        } else if (skill.name === 'poison') {
            return (
                <Poison>
                    <img src={poison}/>
                    {skill.name}
                </Poison>)
        } else if (skill.name === 'fire') {
            return (
                <Fire>
                    <img src={fire}/> 
                    {skill.name}
                </Fire>)
        } else if (skill.name === 'flying') {
            return (
                <Flying>
                    <img src={flying}/>
                    {skill.name}
                </Flying>)
        }
        else if (skill.name === 'water') {
            return (
                <Water>
                    <img src={water}/>
                    {skill.name}
                </Water>)
        }
        else if (skill.name === 'bug') {
            return (
                <Bug>
                    <img src={bug}/> 
                    {skill.name}
                </Bug>)
        } else if (skill.name === 'normal') {
            return (
                <Normal>
                    <img src={normal}/>
                    {skill.name}
                </Normal>)
        }
    }

    const types2 = (skill) => {
        if (skill.name === 'grass') {
            return (
                <Grass>
                    <img src={grass}/>
                    {skill.name}
                </Grass>)
        } else if (skill.name === 'poison') {
            return (
                <Poison>
                    <img src={poison}/>
                    {skill.name}
                </Poison>)
        } else if (skill.name === 'fire') {
            return (
                <Fire>
                    <img src={fire}/>
                    {skill.name}
                </Fire>)
        } else if (skill.name === 'flying') {
            return (
                <Flying>
                    <img src={flying}/>
                    {skill.name}
                </Flying>)
        }
        else if (skill.name === 'water') {
            return (
                <Water>
                    <img src={water}/>
                    {skill.name}
                </Water>)
        }
        else if (skill.name === 'bug') {
            return (
                <Bug>
                    <img src={bug}/> 
                    {skill.name}
                </Bug>)
        } else if (skill.name === 'normal') {
            return (
                <Normal>
                    <img src={normal}/>
                    {skill.name}
                </Normal>)
        }
    }


    return (
        <SectionMain>
            <PokemonPhoto src={pokemonImgMain} width={'40%'} />
            <Card>
                <PokeballBack src={pokeballBack} height={'90%'} width={'65%'} />
                <header>
                    <span>#0{id}</span>
                    <h2>{pokemon.name}</h2>
                </header>

                <article>
                    {types1(skills1)}
                    {types2(skills2)}
                </article>

                <article>
                    <button onClick={() => changeToDetails(navigate, pokemon.name, setName, id, setIdPok)}>Detalhes</button>
                    <button onClick={() => addToPokedex(pokemonList, id)}>Capturar!</button>
                </article>
            </Card>
        </SectionMain>
    )
}