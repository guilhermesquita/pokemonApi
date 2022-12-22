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
    const { capture } = context

    //ApiContext
    const apiContext = useContext(ApiContext)
    const { pokemon, id, arr, setArr } = apiContext

    const [listPokemon, pokemonImgMain] = useRequestDataApi(id)

    const changeButtonSelect = (idPok) =>{
        setArr  (['csd'])
    }

    const navigate = useNavigate()

    return(
        <SectionMain>
            <img src={pokemonImgMain} width={'45%'}/>
            <Card>
                <img src={pokeballBack}/>
                <header>
                    #0{id}<br/>
                    {pokemon.name}
                </header>
                
                <article>
                    <button>skill1</button>
                    <button>skill2</button>
                </article>

                <article>
                    <button onClick={()=> changeToDetails(navigate)}>Detalhes</button>
                    <button onClick={changeButtonSelect(id)}>{capture}</button>
                </article>
            </Card>
        </SectionMain>
    )
}