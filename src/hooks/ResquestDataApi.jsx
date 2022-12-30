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
           if(r.data.types.length == 2){
                setSkills1(r.data.types[0].type)
                setSkills2(r.data.types[1].type)
            }else{
                setSkills1(r.data.types[0].type)    
            }
            setImg(r.data.sprites.other['official-artwork'].front_default)
        })
        .catch((e)=>console.log(e), [])
    })

    return [pokemons, img, skills1, skills2]
}