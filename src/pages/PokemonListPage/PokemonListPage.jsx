import {PokemonCard} from '../../components/PokemonCard/PokemonCard'
import {ListPage} from './style'

export const PokemonListPage = () => {
    return(
        <ListPage>
            <p>Todos Pokémons</p>
            <PokemonCard/>
        </ListPage>
    )
}