import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestDataApi = (id) => {

    const [pokemons, setPokemons] = useState([{}])
    const [skills1, setSkills1] = useState([])
    const [skills2, setSkills2] = useState([])
    const [img, setImg] = useState([{}])

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((r)=>{
            setPokemons(r.data.results)
            //console.log(r.data)
            setSkills1(r.data.types[0].type)
            setSkills2(r.data.types[1].type)
            setImg(r.data.sprites.other.home.front_default)
        })
        .catch((e)=>console.log(e), [])
    })

    return [pokemons, img, skills1, skills2]
}