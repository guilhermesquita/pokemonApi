import { GlobalContext } from '../../../context/GlobalContext'
import { useContext, useState } from 'react'

export const GoToPokedex = () => {
 
    const context = useContext(GlobalContext);
    const {changeButton, changePage} = context

    return(
        <>
            <button>ccsdcsdcs</button>
        </>
    )
}