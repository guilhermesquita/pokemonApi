import styled from "styled-components";

export const SectionMain = styled.section`
    position: relative;
    img{
        position: absolute;
        z-index: 1;
        left: 55%;
        bottom: 50%;
    }
`

export const Card = styled.section `
    font-family: "Poppins", 'Courier New', Courier, monospace;
    background-color: #71C3FF;
    width: 28vw;
    height: 27vh;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    padding-right: 30px;
    gap: 14px;
    img{
        position: absolute;
        z-index: 0;
        top: 0;
        left: 44%;
    }
    article:nth-child(4){
        margin-top: 50px;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
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