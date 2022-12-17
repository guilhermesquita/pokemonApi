import { useState } from "react"
import { Header } from "./components/Header/Header"
import { GlobalContext } from "./context/GlobalContext"
import { GlobalStyle } from "./globalStyle"
import { PokedexPage } from "./pages/PokedexPage/PokedexPage"
import { Main } from "./style"
import {PokemonListPage} from './pages/PokemonListPage/PokemonListPage'
import { PokemonDetailPage } from './pages/PokemonDetailPage/PokemonDetailPage'

function App() {

  const [page, setPage] = useState(1)
  const [nameButton, setNameButton] = useState("Pokédex")
  const [capture, setCapture] = useState('Capturar!')

  // const changePage = () => {
  //   if(page === 1){
  //     setPage(2);
  //     setNameButton("Todos Pokémons")
  //   }else{
  //     setPage(1);
  //     setNameButton("Pokédex")
  //   }
  // }

  const changePageToList = () => {
    setPage(1);
    setNameButton("Pokédex")
  }

  const changePageToPokedex = () => {
    setPage(2);
    setNameButton("Todos Pokémons")
  }

  const changePageToTrash = () => {
    setPage(3);
    setNameButton("Excluir da Pokedex")
  }

  const capturedPokemon = () => {
    capture === 'Capturar!' ? setCapture('Capturado!') : setCapture('Capturar!')
  }

  const context = {
    nameButton: nameButton,
    changePageToList: changePageToList,
    changePageToPokedex: changePageToPokedex,
    changePageToTrash: changePageToTrash,
    capture: capture,
    capturedPokemon: capturedPokemon
  }

  return(
    <GlobalContext.Provider value={context}>
      <GlobalStyle/>
      <Header/>
      <Main>
        {page === 1 ? <PokemonListPage/> : <></>}
        {page === 2 ? <PokedexPage/> : <></>}
        {page === 3 ? <PokemonDetailPage/> : <></>}
      </Main>
    </GlobalContext.Provider>
  )
}

export default App