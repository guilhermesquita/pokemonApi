import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";


export const changePageToList = (navigate) => {
    navigate('/');
  }

  export const changePageToPokedex = (navigate) => {
    navigate('/pokedex');
  }

  export const changeToDetails = (navigate) => {
    navigate(':pokemon')
  }