import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestDataApi = (id) => {

    const [pokemons, setPokemons] = useState([{}])
    const [skills1, setSkills1] = useState([])
    const [skills2, setSkills2] = useState([])
    const [img, setImg] = useState([{}])
    const [frontImg, setFrontImg] = useState([{}])
    const [backImg, setBackImg] = useState([{}])
    const [baseStats, setBaseStats] = useState([{}])
    const [idPokemon, setIdPokemon] = useState()

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((r)=>{
            setPokemons(r.data.results)
            setIdPokemon(r.data.id)
           if(r.data.types.length == 2){
                setSkills1(r.data.types[0].type)
                setSkills2(r.data.types[1].type)
            }else{
                setSkills1(r.data.types[0].type)    
            }
            setImg(r.data.sprites.other['official-artwork'].front_default)
            setBackImg(r.data.sprites.back_default)
            setFrontImg(r.data.sprites.front_default)
            setBaseStats(r.data.stats)
        })
        .catch((e)=>console.log(e), [])
    })

    return [pokemons, idPokemon, img, skills1, skills2, frontImg, backImg, baseStats]
}