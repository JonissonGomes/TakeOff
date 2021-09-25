import styled from "styled-components";

export const Page = styled.div`
    width: 100vw;
    height: 40vh;
`;

export const ContainerTitle = styled.div`
    margin-top: 6%;
    text-align: center;
`;

export const Title = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');
    font-family: 'Montserrat', sans;
    letter-spacing: -0.5px;
    color: #000000;
    margin-bottom: 0;
    font-weight: 900;
    font-size: 40pt;
`;

export const Description = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
    font-family: lato, sans-serif;
    width: 68%;
    margin-left: 15%;
    margin-right: 15%;
    font-weight: 400;
    color: #6D747A;
    font-size: 16pt;
`;

export const ContainerFilter = styled.div`
    display: flex;
    align-items: center;
    margin-left: 14%;
    margin-right: 16%;
    margin-top: 2%;
`;

export const FilterLabel = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
    font-family: lato, sans-serif;
    letter-spacing: 0;
    color: #6D747A;
    margin-bottom: 0;
    margin-left: 2%;
    font-weight: 600;
    font-size: 14pt;
`;

export const ContainerSelect = styled.div`
    width: 12%;
    margin-top: 12px;
    margin-left: 1%;
`;

export const Button = styled.div`
    background-color: none;
    border: 1px solid #6D747A;
    border-radius: 4px;
    margin-top: 1%;
    margin-left: 2%;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    padding-right: 8px;
    cursor: pointer;
    color: #6D747A;
`;

export const Clear = styled.div`
    background-color: #FA5D5D;
    border-radius: 4px;
    margin-top: 1%;
    margin-left: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 8px;
    padding-right: 8px;
    cursor: pointer;
    color: white;
`;