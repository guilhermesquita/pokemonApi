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
    min-width: 29vw;
    min-height: 25vh;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    padding-right: 30px;
    gap: 14px;
    padding-bottom: 10px;
    padding-top: 12px;
    img{
        position: absolute;
        z-index: 0;
        top: 0;
        left: 35%;
    }
    header{
        span{
            font-size: 12px;
            color: #FFFFFF;
            font-weight: 700;
        }
        h2{
            color: #FFFFFF;
        }
    }
    article:nth-child(4){
        margin-top: 20px;
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
            height: 32px;
            border: none;
            border-radius: 5px;
        }
    }
`

export const Grass = styled.section `
    height: 10%;
    background-color: #70B873;
    width: 20%;
    text-align: center;
    z-index: 1;
    font-family: "Poppins", 'Courier New', Courier, monospace;
    font-weight: 300;
    color: #FFFF;
    border: 1px dashed #FFFF;
    border-radius: 8px;
    align-items: center;
`

export const Poison = styled.section `
    height: 10%;
    background-color: #AD61AE;
    width: 20%;
    text-align: center;
    z-index: 1;
    font-family: "Poppins", 'Courier New', Courier, monospace;
    font-weight: 300;
    color: #FFFF;
    border: 1px dashed #FFFF;
    border-radius: 8px;
    align-items: center;
`
export const Fire = styled.section `
    height: 10%;
    background-color: #F44900;
    width: 20%;
    text-align: center;
    z-index: 1;
    font-family: "Poppins", 'Courier New', Courier, monospace;
    font-weight: 300;
    color: #FFFF;
    border: 1px dashed #FFFF;
    border-radius: 8px;
    align-items: center;
`

export const Flying = styled.section `
    height: 10%;
    background-color: #6892B0;
    width: 20%;
    text-align: center;
    z-index: 1;
    font-family: "Poppins", 'Courier New', Courier, monospace;
    font-weight: 300;
    color: #FFFF;
    border: 1px dashed #FFFF;
    border-radius: 8px;
    align-items: center;
`
export const Water = styled.section `
    height: 10%;
    background-color: #33A4F5;
    width: 20%;
    text-align: center;
    z-index: 1;
    font-family: "Poppins", 'Courier New', Courier, monospace;
    font-weight: 300;
    color: #FFFF;
    border: 1px dashed #FFFF;
    border-radius: 8px;
    align-items: center;
`

export const Bug = styled.section `
    height: 10%;
    background-color: #316520;
    width: 20%;
    text-align: center;
    z-index: 1;
    font-family: "Poppins", 'Courier New', Courier, monospace;
    font-weight: 300;
    color: #FFFF;
    border: 1px dashed #FFFF;
    border-radius: 8px;
    align-items: center;
`
export const Normal = styled.section `
    height: 10%;
    background-color: #8a8a8a;
    width: 20%;
    text-align: center;
    z-index: 1;
    font-family: "Poppins", 'Courier New', Courier, monospace;
    font-weight: 300;
    color: #FFFF;
    border: 1px dashed #FFFF;
    border-radius: 8px;
    align-items: center;
`