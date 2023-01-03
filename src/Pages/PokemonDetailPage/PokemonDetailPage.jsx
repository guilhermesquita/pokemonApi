import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import {Grass, PokedexStyleDetail} from './style'
import pokeballBack from '../../assets/pngwing.svg'

export const PokemonDetailPage = () =>{

    //const

    const context = useContext(GlobalContext);
    const {setNameButton, pokemonDetail} = context
    setNameButton('Excluir da Pokedex')

    return(
        <PokedexStyleDetail>
            <p>Detalhes</p>
            <Grass>

                <section>
                    <article>
                        img front   
                    </article>

                    <article>
                        img back
                    </article>
                </section>

                <section>
                    <h3>base states</h3>
                </section>

                <section>
                    <article>
                        NAME
                    </article>

                    <article>
                        Moves:
                    </article>
                </section>

                <img src={pokeballBack} width='48%'/>
            </Grass>
        </PokedexStyleDetail>
    )
}