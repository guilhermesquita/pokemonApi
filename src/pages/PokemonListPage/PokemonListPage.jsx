import { useContext, useState } from 'react';
import {PokemonCard} from '../../components/PokemonCard/PokemonCard'
import { GlobalContext } from '../../context/GlobalContext';
import {ListPage} from './style'
import {useRequestDataApi} from '../../hooks/ResquestDataApi'
import { ApiContext } from '../../context/ApiContext';

export const PokemonListPage = () => {

    const context = useContext(GlobalContext);
    const {setNameButton} = context
    setNameButton('Pokédex')

    const [pokemonList, imgMain, loadingPokemon] = useRequestDataApi('')
    const [capture, setCapture] = useState('Capturar')

    let [arr, setArr] = useState([])

    for (let i = 0; i < pokemonList.length; i++){
        arr.push(capture)
    }

    console.log(arr)


    return(
        <ListPage>
            <p>Todos Pokémons</p>
            <article>
               
               {loadingPokemon?<p>'Carregando'</p>:
               pokemonList.map((pokemon, index)=>{

                    const apiContext = 
                    {
                        pokemon: pokemon,
                        id: index + 1,
                        index: index,
                        arr: arr,
                        setArr: setArr
                    }

                    return(
                        <ApiContext.Provider value={apiContext} key={index}>
                            <PokemonCard/>
                        </ApiContext.Provider>)
                })}
            </article>
        </ListPage>
    )
}