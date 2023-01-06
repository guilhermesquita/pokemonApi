import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import {PokedexStylePage} from './style'

export const PokedexPage = () =>{

    const context = useContext(GlobalContext);
    const {setNameButton, pokedex} = context
    setNameButton('Todos Pokémons')

    return(
        <PokedexStylePage>
            <p>Meus Pokémons</p>
            {pokedex.length === 0 ? <p>Ihhh sua pokedex ainda está vazia!</p>:pokedex.map((pokemon)=>{
                return <h6>{pokemon.name}</h6>
            })}
        </PokedexStylePage>
    )
}