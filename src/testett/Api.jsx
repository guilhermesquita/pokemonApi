
import { useRequestDataApi } from "../hooks/ResquestDataApi"

export const Api = () => {

    const pokemons = useRequestDataApi()

    return(
    <div>
       {pokemons.map(pokemons=>{
        return <p>{pokemons.name}</p>
       })}
    </div>
    )
}