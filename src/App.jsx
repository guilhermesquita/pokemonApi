import { useState } from "react"
import { Header } from "./components/Header/Header"
import { GlobalContext } from "./context/GlobalContext"
import { GlobalStyle } from "./globalStyle"
import { Main } from "./style"
import { Router } from "./routes/Routes"
import { BrowserRouter } from "react-router-dom"


function App() {

  const [nameButton, setNameButton] = useState("Pokédex")
  const [name, setName] = useState('')
  const [idPok, setIdPok] = useState('')
  const [pokedex, setPokedex] = useState([])

  const addToPokedex = (listPokemon, id) => {
    const identify = id
    setIdPok(id)
    const index = identify - 1
    const clonePokedex = [...pokedex, listPokemon[index]]
    setPokedex(clonePokedex);
    console.log(pokedex)
  }

  const context = {
    nameButton: nameButton,
    setNameButton: setNameButton,
    name: name,
    setName: setName,
    idPok: idPok,
    setIdPok: setIdPok,
    addToPokedex: addToPokedex,
    pokedex: pokedex,
  }

  return(
    <GlobalContext.Provider value={context}>
      <BrowserRouter>
        <GlobalStyle/>
        <Header/>
        <Main>
          <Router/>
        </Main>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App