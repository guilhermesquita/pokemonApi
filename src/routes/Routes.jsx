import {Route, Routes } from "react-router-dom"
import {PokemonListPage} from '../pages/PokemonListPage/PokemonListPage'
import {PokedexPage} from '../pages/PokedexPage/PokedexPage'
import {PokemonDetailPage} from '../pages/PokemonDetailPage/PokemonDetailPage'

export const Router = () => {
    return(
            <Routes>
                <Route index element={<PokemonListPage/>}/>
                <Route path="/pokedex" element={<PokedexPage/>}/>
                <Route path="/:pokemon" element={<PokemonDetailPage/>}/>
            </Routes>
    )
}