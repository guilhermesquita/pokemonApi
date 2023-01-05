import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { Grass, PokedexStyleDetail } from './style'
import pokeballBack from '../../assets/pngwing.svg'
import { useRequestDataApi } from '../../hooks/ResquestDataApi';

export const PokemonDetailPage = () => {

    //const

    const context = useContext(GlobalContext);
    const { setNameButton, name, idPok } = context
    setNameButton('Excluir da Pokedex')

    const [pokemonList] = useRequestDataApi('');
    const [listPokemon, pokemonImgMain, skills1, skills2] = useRequestDataApi(idPok)


    return (
        <PokedexStyleDetail>
            <p>Detalhes</p>

            {pokemonList.filter((pokemon)=>{
                return pokemon.name === name
            })
            .map((pokemon, index) => {
                return (<Grass key={index}>
                    <section>
                        <article>
                            <img src={pokemonImgMain}/> 
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
                            #0{idPok}
                            {name}
                        </article>

                        <article>
                            Moves:
                            {pokemon.name}
                        </article>
                    </section>

                    <img src={pokeballBack} width='46%' />
                </Grass>)
            })}
        </PokedexStyleDetail>
    )
}