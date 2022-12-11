import { Header } from "./components/Header/Header"
import { PokemonCard } from "./components/PokemonCard/PokemonCard"
import { GlobalStyle } from "./globalStyle"
import { Main } from "./style"

function App() {
  return(
    <div>
      <GlobalStyle/>
      <Header/>
      <Main>
        <PokemonCard/>
      </Main>
    </div>
  )
}

export default App
