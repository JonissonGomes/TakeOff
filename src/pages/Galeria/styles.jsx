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

export const ContainerFilter = styled.div`
    display: flex;
    align-items: center;
    margin-left: 11%;
    margin-right: 16%;
    margin-top: 2%;
`;

export const FilterLabel = styled.h1`
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

export const ContainerImages = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    row-gap: 4%;
    column-gap: 2%;
    margin-top: 2%;
    margin-left: 12%;
    width: 50%;
    /* @media(max-width: 700px){
        grid-template-columns: 1fr 1fr;
    } */
`;

export const ContainerInfo = styled.div`
    border-radius: 4px;
    position: absolute;
    width: 380px;
    height: 194px;
    opacity: 0;
    margin-top: -196px;
    transition: 400ms;
`;

export const Content = styled.div`
    border-radius: 2px;
    margin-left: 1%;
    padding: 4px;
    text-align: center;
    &:hover{
        ${ContainerInfo}{
            opacity: 1;
            background-color: #0009;
            transition: 400ms;
        }
      }
`;

export const SectionButton = styled.div`
    margin-top: 1%;
    margin-left: 96%;
    margin-bottom: 0;
    width: 30px;
`;

export const Image = styled.img`
    width: 380px;
    height: 194px;
`;

export const Cidade = styled.p`
    font-family: lato, sans-serif;
    letter-spacing: 0;
    color: white;
    margin-top: 10%;
    margin-bottom: 0;
    margin-left: 2%;
    font-weight: 900;
    font-size: 22pt;
`;

export const Estado = styled.p`
    font-family: lato, sans-serif;
    letter-spacing: 1px;
    color: white;
    margin-top: -1%;
    margin-bottom: 0;
    margin-left: 2%;
    font-weight: 300;
    font-size: 14pt;
`;

export const More = styled.p`
    border-radius: 25px;
    color: black;
    border: 1px solid black;
    background-color: white;
    margin-left: 36%;
    margin-bottom: 0;
    margin-right: 36%;
    padding: 4px;
    text-align: center;
    &:hover{
        color: white;
        background-color: #00000038;
        border: 1px solid white;
        cursor: pointer;
    }
`;

export const Redes = styled.p`
    display: flex;
    align-items: center;
    margin-top: 3%;
    margin-left: 40%;
    justify-content: center;
    width: 20%;
`;

export const Modal = styled.div`
    width: 100%;
    height: 106.9%;
    position: absolute;
    margin-top: -46%;
    margin-bottom: 0;
    background-color: #0009;
    opacity: 0.8;
`;
export const ContainerModal = styled.div`
    background-color: blue;
    display: flex;
`;

export const ContentModal = styled.div`
    background-color: white;
    width: 1448px;
    height: 860px;
    margin-left: 14%;
    margin-top: -36%;
    margin-bottom: 0;
    border-radius: 4px;
    border: 1px solid black;
    position: absolute;
`;

export const ImageModal = styled.img`
    width: 800px;
    height: 600px;
    margin-left: 2%;
    margin-top: 2%;
`;

export const Info = styled.div`
    background-color: blue;
`;

export const Locale = styled.h1`
 font-family: lato, sans-serif;
    letter-spacing: 0;
    color: white;
    margin-top: 10%;
    margin-bottom: 0;
    margin-left: 2%;
    font-weight: 900;
    font-size: 22pt;
`;

export const SubLocale = styled.h3`
 font-family: lato, sans-serif;
    letter-spacing: 0;
    color: white;
    margin-top: 10%;
    margin-bottom: 0;
    margin-left: 2%;
    font-weight: 900;
    font-size: 22pt;
`;

export const Details = styled.p`
 font-family: lato, sans-serif;
    letter-spacing: 0;
    color: white;
    margin-top: 10%;
    margin-bottom: 0;
    margin-left: 2%;
    font-weight: 900;
    font-size: 22pt;
`;

export const Data = styled.p`
    font-weight: 900;
    font-size: 22pt;
`;

export const MediaLink = styled.div`
    background-color: blue;
`;