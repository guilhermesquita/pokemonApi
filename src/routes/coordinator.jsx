export const changePageToList = (navigate) => {
  navigate('/');
}

export const changePageToPokedex = (navigate) => {
  navigate('/pokedex');
}

export const changeToDetails = (navigate, pokemon, setName) => {
  navigate(`:${pokemon}`)
  setName(pokemon)
}