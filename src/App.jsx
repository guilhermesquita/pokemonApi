import { useState } from "react"
import { Header } from "./components/Header/Header"
import { GlobalContext } from "./context/GlobalContext"
import { GlobalStyle } from "./globalStyle"
import { PokedexPage } from "./pages/PokedexPage/PokedexPage"
import { Main } from "./style"
import {PokemonListPage} from './pages/PokemonListPage/PokemonListPage'

function App() {

  const [page, setPage] = useState(1)
  const [nameButton, setNameButton] = useState("Pokedex")

  const changePage = () => {
    if(page === 1){
      setPage(2);
      setNameButton("Todos os pokemons")
    }else{
      setPage(1);
      setNameButton("Pokedex")
    }
  }

  const context = {
    nameButton: nameButton,
    changePage: changePage
  }

  return(
    <GlobalContext.Provider value={context}>
      <GlobalStyle/>
      <Header/>
      <Main>
        {page === 1 ? <PokemonListPage/> : <PokedexPage/>}
      </Main>
    </GlobalContext.Provider>
  )
}

export default App
