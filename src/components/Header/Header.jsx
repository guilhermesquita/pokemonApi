import pokemon from '../../assets/pokemonlogo.svg'
import { HeaderGlobal } from './style'

export const Header = () => {
    return (
    <HeaderGlobal>
        <img src={pokemon} width='200'/>
    </HeaderGlobal>
    )
}