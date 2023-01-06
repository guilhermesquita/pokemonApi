import { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { Hability, Over, PokeballBack, PokedexStyleDetailBug, PokedexStyleDetailFire, PokedexStyleDetailGrass, PokedexStyleDetailNormal, PokedexStyleDetailWater, StatsStyle } from './style'
import pokeballBack from '../../assets/pngwing.svg'
import { useRequestDataApi } from '../../hooks/ResquestDataApi';

export const PokemonDetailPage = () => {

    //const

    const context = useContext(GlobalContext);
    const { setNameButton, name, idPok } = context
    setNameButton('Excluir da Pokedex')

    const [pokemonList] = useRequestDataApi('');
    const [listPokemon, id, pokemonImgMain, skills1, skills2, frontImg, backImg, baseStats, totalOver] = useRequestDataApi(idPok)

    const changeColorCard = () => {
        if (skills1.name === 'grass') {
            return <PokedexStyleDetailGrass>
                <p>Detalhes</p>

                {pokemonList.filter((pokemon) => {
                    return pokemon.name === name
                })
                    .map((pokemon, index) => {
                        return (<main key={index}>
                            <section>
                                <article>
                                    <img src={frontImg} alt="frontImage" width={'100%'} />
                                </article>

                                <article>
                                    <img src={backImg} alt="backImage" width={'100%'} />
                                </article>
                            </section>

                            <section>
                                <h3>Base stats</h3>
                                {baseStats.map((stats, index) => {

                                    return (
                                        <StatsStyle key={index}>
                                            <Hability>{stats.stat.name}</Hability>
                                            <Over>{stats.base_stat}</Over>
                                        </StatsStyle>
                                    )
                                })}
                                <StatsStyle>
                                    Total: {totalOver}
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
                        </main>)
                    })}
            </PokedexStyleDetailGrass>
        } else if (skills1.name === 'fire') {
            return <PokedexStyleDetailFire>
                <p>Detalhes</p>

                {pokemonList.filter((pokemon) => {
                    return pokemon.name === name
                })
                    .map((pokemon, index) => {
                        return (<main key={index}>
                            <section>
                                <article>
                                    <img src={frontImg} alt="frontImage" width={'100%'} />
                                </article>

                                <article>
                                    <img src={backImg} alt="backImage" width={'100%'} />
                                </article>
                            </section>

                            <section>
                                <h3>Base stats</h3>
                                {baseStats.map((stats, index) => {

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
                        </main>)
                    })}
            </PokedexStyleDetailFire>
        }else if (skills1.name === 'water') {
            return <PokedexStyleDetailWater>
                <p>Detalhes</p>

                {pokemonList.filter((pokemon) => {
                    return pokemon.name === name
                })
                    .map((pokemon, index) => {
                        return (<main key={index}>
                            <section>
                                <article>
                                    <img src={frontImg} alt="frontImage" width={'100%'} />
                                </article>

                                <article>
                                    <img src={backImg} alt="backImage" width={'100%'} />
                                </article>
                            </section>

                            <section>
                                <h3>Base stats</h3>
                                {baseStats.map((stats, index) => {

                                    return (
                                        <StatsStyle key={index}>
                                            <Hability>{stats.stat.name}</Hability>
                                            <Over>{stats.base_stat}</Over>
                                            <div></div>
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
                        </main>)
                    })}
            </PokedexStyleDetailWater>
        }else if (skills1.name === 'bug') {
            return <PokedexStyleDetailBug>
                <p>Detalhes</p>

                {pokemonList.filter((pokemon) => {
                    return pokemon.name === name
                })
                    .map((pokemon, index) => {
                        return (<main key={index}>
                            <section>
                                <article>
                                    <img src={frontImg} alt="frontImage" width={'100%'} />
                                </article>

                                <article>
                                    <img src={backImg} alt="backImage" width={'100%'} />
                                </article>
                            </section>

                            <section>
                                <h3>Base stats</h3>
                                {baseStats.map((stats, index) => {

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
                        </main>)
                    })}
            </PokedexStyleDetailBug>
        }else if (skills1.name === 'normal') {
            return <PokedexStyleDetailNormal>
                <p>Detalhes</p>

                {pokemonList.filter((pokemon) => {
                    return pokemon.name === name
                })
                    .map((pokemon, index) => {
                        return (<main key={index}>
                            <section>
                                <article>
                                    <img src={frontImg} alt="frontImage" width={'100%'} />
                                </article>

                                <article>
                                    <img src={backImg} alt="backImage" width={'100%'} />
                                </article>
                            </section>

                            <section>
                                <h3>Base stats</h3>
                                {baseStats.map((stats, index) => {

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
                        </main>)
                    })}
            </PokedexStyleDetailNormal>
        }
    }

    return changeColorCard()
}