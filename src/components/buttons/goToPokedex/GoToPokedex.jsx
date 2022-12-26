import { GlobalContext } from '../../../context/GlobalContext'
import { useContext} from 'react'
import {PokedexButton} from './style'
import { useNavigate } from 'react-router-dom';
import {changePageToPokedex} from '../../../routes/coordinator'

export const GoToPokedex = () => {
 
    const context = useContext(GlobalContext);
    const {nameButton} = context

    const navigate = useNavigate()

    return(        
        <PokedexButton onClick={() => changePageToPokedex(navigate)}>{nameButton}</PokedexButton>
    )
}