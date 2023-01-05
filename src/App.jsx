import { useState } from "react"
import { Header } from "./components/Header/Header"
import { GlobalContext } from "./context/GlobalContext"
import { GlobalStyle } from "./globalStyle"
import { Main } from "./style"
import { Router } from "./routes/Routes"
import { BrowserRouter } from "react-router-dom"


function App() {

  const [nameButton, setNameButton] = useState("Pokédex")
  const [capture, setCapture] = useState('Capturar!')
  const [name, setName] = useState('')
  const [idPok, setIdPok] = useState('')

  const capturedPokemon = () => {
    capture === 'Capturar!' ? setCapture('Capturado!') : setCapture('Capturar!')
  }

  const context = {
    nameButton: nameButton,
    setNameButton: setNameButton,
    capture: capture,
    capturedPokemon: capturedPokemon,
    name: name,
    setName: setName,
    idPok: idPok,
    setIdPok: setIdPok
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