import styled from "styled-components";

export const Card = styled.section `
    font-family: "Poppins", 'Courier New', Courier, monospace;
    background-color: #71C3FF;
    max-width: 20%;
    height: 19vh;
    border-radius: 10px;
    display: flex;
    padding-left: 30px;
    padding-right: 30px;
    article:nth-child(1){
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
            height: 20%;
            border: none;
            border-radius: 5px;
        }
    }
`