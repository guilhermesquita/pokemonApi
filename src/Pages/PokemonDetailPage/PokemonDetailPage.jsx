import { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { Grass, Hability, Over, PokeballBack, PokedexStyleDetail, StatsStyle } from './style'
import pokeballBack from '../../assets/pngwing.svg'
import { useRequestDataApi } from '../../hooks/ResquestDataApi';

export const PokemonDetailPage = () => {

    //const

    const context = useContext(GlobalContext);
    const { setNameButton, name, idPok } = context
    setNameButton('Excluir da Pokedex')

    const [pokemonList] = useRequestDataApi('');
    const [listPokemon, pokemonImgMain, skills1, skills2, frontImg, backImg, baseStats] = useRequestDataApi(idPok)
    
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
                            <img src={frontImg} alt="frontImage" width={'100%'}/>
                        </article>

                        <article>
                            <img src={backImg} alt="backImage" width={'100%'}/> 
                        </article>
                    </section>

                    <section>
                        <h3>Base stats</h3>
                            {baseStats.map((stats, index)=>{

                                return (
                                    <StatsStyle key={index}>
                                        <Hability>{stats.stat.name}</Hability>
                                        <Over>{stats.base_stat}</Over>
                                    </StatsStyle>
                                )
                            })}
                            <StatsStyle>
                                Total: 
                            </StatsStyle>
                    </section>

                    <section>
                        <article>
                            <article>
                                <p>#0{idPok}</p>
                                <p>{name}</p>
                            </article>
                        </article>

                        <article>
                            Moves:
                            {skills1.name}
                            {skills2.name}
                        </article>
                    </section>

                    <PokeballBack src={pokeballBack} width='46%' />
                </Grass>)
            })}
        </PokedexStyleDetail>
    )
}