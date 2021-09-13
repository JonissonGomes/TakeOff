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

export const ContainerTumb = styled.div`
    width: 84vw;
    height: 60vh;
    margin-top: 4%;
    margin-left: 8%;
    display: flex;
`;

export const Tumb = styled.div`
    margin-left: 2.4%;
    margin-right: 2.4%;
    width: 480px;
    height: 240px;
`;

export const ContainerLocale = styled.div`
    text-align: center;
    margin-top: -160px;
`;

export const City = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');
    font-family: 'Montserrat', sans;
    color: white;
    font-weight: 900;
    font-size: 30pt;
    letter-spacing: -0.5px;
    margin-bottom: 0;
`;

export const State = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');
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