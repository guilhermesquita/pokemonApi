export const changePageToList = (navigate) => {
  navigate('/');
}

export const changePageToPokedex = (navigate) => {
  navigate('/pokedex');
}

export const changeToDetails = (navigate, pokemon, setName, id, setIdPok) => {
  navigate(`:${pokemon}`)
  setName(pokemon)
  setIdPok(id)
}