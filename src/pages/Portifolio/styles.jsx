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
    font-family: 'Montserrat', sans;
    letter-spacing: -0.5px;
    color: #000000;
    margin-bottom: 0;
    font-weight: 900;
    font-size: 40pt;
`;

export const Description = styled.h1`
    font-family: lato, sans-serif;
    width: 68%;
    margin-left: 15%;
    margin-right: 15%;
    font-weight: 400;
    color: #6D747A;
    font-size: 16pt;
`;

export const ContainerTumb = styled.div`
    width: 80vw;
    height: 60vh;
    margin-top: 2%;
    margin-left: 12%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 26px;
`;

export const Tumb = styled.div`
    margin-left: 2.4%;
    margin-right: 2.4%;
    width: 480px;
    height: 240px;
    &:hover{

    }
`;

export const ContainerLocale = styled.div`
    text-align: center;
    margin-top: -160px;
`;

export const City = styled.h2`
    font-family: 'Montserrat', sans;
    color: white;
    font-weight: 900;
    font-size: 30pt;
    letter-spacing: -0.5px;
    margin-bottom: 0;
`;

export const State = styled.p`
    font-family: 'Montserrat', sans;
    color: white;
    font-weight: 400;
    font-size: 12pt;
    letter-spacing: -0.5px;
    margin-top: 0;
    margin-bottom: 13%;
`;

export const ContainerMedia = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 18%;
    margin-left: 40%;
    margin-right: 40%;
`;

export const Hover = styled.div`
    background-color: black;
    width: 480px;
    height: 196px;
    margin-top: -12.6%;
    border-radius: 4px;
    position: absolute;
    opacity: 0;
    transition: 300ms;
    &:hover{
        transition: 300ms;
        opacity: 0.2;
    }
`;