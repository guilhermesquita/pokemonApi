import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestDataApi = () => {

    const [pokemons, setPokemons] = useState([{}])

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then((r)=>{
            console.log(r.data.results)
            setPokemons(r.data.results)
        })
        .catch((e)=>console.log(e), [])
    })

    return pokemons
}