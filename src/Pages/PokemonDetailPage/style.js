import styled from "styled-components";

export const PokedexStyleDetail = styled.section `
    padding-top: 10vh;
    padding-left: 50px;
    padding-bottom: 30vh;
    display: flex;
    flex-direction: column;
    gap: 50px;
    p{
        font-size: 3vw;
        font-family: 'Poppins', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande';
        color: #FFFFFF;
        font-weight: 600;
    }
`
export const Grass = styled.main `
    display: flex;  
    width: 95%;
    gap: 20px;
    background-color: green;
    border-radius: 20px;
    align-items: center;
    position: relative;
    img{
            position: absolute;
            right: 0;
            top: 0;
        }
    section:nth-child(1){
        display: flex;
        flex-direction: column;
        gap: 20px;
        min-height: 400px;
        padding-left: 20px;
        justify-content: center;
        article{
            background-color: white;
            min-height: 28vh;
            border-radius: 5px;
            height: 98%;
            width: 15vw;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    section:nth-child(2){
        display: flex;
        flex-direction: column;
        height: 60vh;
        width: 20vw;
        background-color: white;
        border-radius: 5px;
    }
    section:nth-child(3){
        display: flex;
        flex-direction: column;
        height: 60vh;
        width: 20vw;
        border-radius: 5px;
        margin-left: 30px;
        z-index: 1;
        article:nth-child(1){
            height: 30%;
            border-radius: 5px;
            width: 15vw;
        }
        article:nth-child(2){
            border-radius: 5px;
            width: 15vw;
            background-color: white;
            height: 70%;
        }
    }
`