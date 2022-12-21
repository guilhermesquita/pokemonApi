import styled from "styled-components";

export const Card = styled.section `
    font-family: "Poppins", 'Courier New', Courier, monospace;
    background-color: #71C3FF;
    width: 30%;
    height: 30vh;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    padding-right: 30px;

    position: relative;

    article:nth-child(2){
        width: 100%;
        height: 100%;
        position: relative;
        border: 1px solid black;
        img{
            position: absolute;
            top: 0;
        }
    }

    article:nth-child(3){
        display: flex;
        width: 100%;
        justify-content: space-between;
        button{height: 20px;}
        button:nth-child(1){
            cursor: pointer;
            font-family: "Poppins", 'Courier New', Courier, monospace;
            font-weight: 600;
            border: none;
            text-decoration: underline;
            background-color: transparent;
            color: white;
        }
        button:nth-child(2){
            cursor: pointer;
            font-family: "Poppins", 'Courier New', Courier, monospace;
            font-weight: 500;
            background-color: #FFFFFF;
            text-align: center;
            width: 40%;
            height: 40px;
            border: none;
            border-radius: 5px;
        }
    }
`