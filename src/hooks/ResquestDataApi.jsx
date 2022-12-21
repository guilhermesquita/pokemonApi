import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestDataApi = (id) => {

    const [pokemons, setPokemons] = useState([{}])
    const [img, setImg] = useState([{}])

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then((r)=>{
            console.log(r.data.results)
            setPokemons(r.data.results)
        })
        .catch((e)=>console.log(e), [])
    })

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((r)=>{
            //console.log(r.data.sprites.front_default)
            setImg(r.data.sprites.other.home.front_default)
        })
        .catch((e)=>console.log(e), [])
    })

    return [pokemons, img]
}