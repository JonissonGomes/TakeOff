import React from 'react';

import { Page, ContainerTitle, Title, Description, ContainerTumb, Tumb, ContainerLocale, City, State, ContainerMedia, Hover } from './styles.jsx';

import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

import Arraia from '../../Assets/arraia.png';
import CaboA from '../../Assets/caboA.png';
import Farol from '../../Assets/farol.png';


export default function portifolio() {

    const Galery = [
        { value: 0, cidade: 'Muro Alto', estado: 'Pernambuco', municipio: 'Cabo', descricao: 'Altas paisagens, um mar completamente claro, com águas bem quentes onde você pode admirar a natureza.', data: '21/09/2021', instagram: 'https://www.instagram.com', youtube: 'https://www.youtube.com', pinterest: 'https://www.instagram.com' },
        { value: 0, cidade: 'Praia do Cabo', estado: 'Pernambuco', municipio: 'Cabo', descricao: 'Altas paisagens, um mar completamente claro, com águas bem quentes onde você pode admirar a natureza.', data: '21/09/2021', instagram: 'https://www.instagram.com', youtube: 'https://www.youtube.com', pinterest: '' },
        { value: 0, cidade: 'Cabo Branco', estado: 'Pernambuco', municipio: 'Cabo', descricao: 'Altas paisagens, um mar completamente claro, com águas bem quentes onde você pode admirar a natureza.', data: '21/09/2021', instagram: 'https://www.instagram.com', youtube: 'https://www.youtube.com', pinterest: 'https://www.instagram.com' },
        { value: 0, cidade: 'Porto de galinhas', estado: 'Pernambuco', municipio: 'Cabo', descricao: 'Altas paisagens, um mar completamente claro, com águas bem quentes onde você pode admirar a natureza.', data: '21/09/2021', youtube: 'https://www.youtube.com', pinterest: '' },
        { value: 0, cidade: 'Camboa', estado: 'Pernambuco', municipio: 'Cabo', descricao: 'Altas paisagens, um mar completamente claro, com águas bem quentes onde você pode admirar a natureza.', data: '21/09/2021', instagram: 'https://www.instagram.com', youtube: '', pinterest: '' },
        { value: 0, cidade: 'Cupi', estado: 'Pernambuco', municipio: 'Cabo', descricao: 'Altas paisagens, um mar completamente claro, com águas bem quentes onde você pode admirar a natureza.', data: '21/09/2021', instagram: '', youtube: 'https://www.youtube.com', pinterest: '' },
        { value: 0, cidade: 'Gaibu', estado: 'Pernambuco', municipio: 'Cabo', descricao: 'Altas paisagens, um mar completamente claro, com águas bem quentes onde você pode admirar a natureza.', data: '21/09/2021', instagram: '', youtube: '', pinterest: 'https://www.instagram.com' },
        { value: 0, cidade: 'Calhetas', estado: 'Pernambuco', municipio: 'Cabo', descricao: 'Altas paisagens, um mar completamente claro, com águas bem quentes onde você pode admirar a natureza.', data: '21/09/2021', instagram: 'https://www.instagram.com', youtube: 'https://www.youtube.com', pinterest: '' },
    ];

    return (
        <Page>
            <Header />

            <ContainerTitle>
                <Title>{`DISCOVERY A NEW WORLD`}</Title>
                <Description>{`A melhor experiência passada através das lentes.`}</Description>
            </ContainerTitle>

            {/* Primeira Linha */}
            <ContainerTumb>
                {Galery.map((item) =>
                    <Tumb>
                        <Link style={{ textDecoration: 'none' }} to={"/"}>
                            <img src={Arraia} />
                            <ContainerLocale>
                                <City>{item.cidade}</City>
                                <State>{item.estado.toUpperCase()}</State>
                            </ContainerLocale>
                        </Link>

                        <ContainerMedia>
                            <Link style={{ paddingLeft: '2px' }} to="/">
                                <Icon icon="entypo-social:instagram" fontSize={30} color="#6D747A" />
                            </Link>

                            <Link to="/">
                                <Icon icon="ant-design:youtube-filled" fontSize={44} color="#6D747A" />
                            </Link>
                        </ContainerMedia>
                        <Hover/>
                    </Tumb>
                )}
            </ContainerTumb>
        </Page>
    )
}
