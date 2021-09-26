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
    display: flex;
`;

export const ContentModal = styled.div`
    background-color: white;
    width: 1348px;
    height: 860px;
    margin-left: 14%;
    margin-top: -36%;
    margin-bottom: 0;
    border-radius: 4px;
    position: absolute;
`;

export const ImageModal = styled.img`
    width: 800px;
    height: 600px;
    margin-left: 2%;
    margin-top: 2%;
`;

export const Info = styled.div`
    background-color: none;
`;

export const Locale = styled.h1`
    font-family: lato, sans-serif;
    letter-spacing: 0.5px;
    color: #64747A;
    margin-top: 16%;
    margin-bottom: 0;
    margin-left: 2%;
    font-weight: 900;
    font-size: 24pt;
    text-align: center;
`;

export const SubLocale = styled.h3`
 font-family: lato, sans-serif;
    letter-spacing: 1px;
    color: red;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 2%;
    font-weight: 300;
    font-size: 18pt;
    text-align: center;
`;

export const Details = styled.p`
    font-family: lato, sans-serif;
    letter-spacing: 0;
    color: black;
    margin-top: 8%;
    margin-bottom: 0;
    margin-left: 12%;
    font-weight: 300;
    font-size: 14pt;
    border: 1px solid #64747A;
    border-radius: 6px;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 32px;
    padding-right: 20px;
    width: 70%;
`;

export const Data = styled.p`
    font-weight: 300;
    font-family: lato, sans-serif;
    margin-left: 76%;
    margin-top: 6px;
    font-size: 12pt;
    color: red;
`;

export const Aviso = styled.p`
    font-size: 14pt;
    font-family: lato, sans-serif;
    color: #6D747A;
    margin-top: 10%;
    margin-left: 8%;
    text-align: center;
    margin-bottom: 0;
`;

export const MediaLink = styled.div`
    width: 60%;
    height: 4%;
    margin-top: 0;
    margin-left: 46%;
    align-items: center;
    text-align: center;
`;

export const CloseButton = styled.div`
    background-color: none;
    border: 1px solid #64747A;
    border-radius: 4px;
    margin-top: 6%;
    margin-left: 4px;
    margin-left: 90%;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 10px;
    padding-right: 10px;
    width: 70px;
    text-align: center;
    cursor: pointer;
    color: #6A747A;
    transition: 200ms;
    &:hover{
        transition: 200ms;
        color: white;
        background-color: #64747A;
        border: 1px solid #64747A;
    }
`;