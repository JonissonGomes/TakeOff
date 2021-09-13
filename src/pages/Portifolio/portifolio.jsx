import React from 'react';

import { Page, ContainerTitle, Title, Description, ContainerTumb, Tumb, ContainerLocale, City, State, ContainerMedia } from './styles.jsx';

import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

import Arraia from '../../Assets/arraia.png';
import CaboA from '../../Assets/caboA.png';
import Farol from '../../Assets/farol.png';


export default function portifolio() {
    return (
        <Page>
            <Header />

            <ContainerTitle>
                <Title>{`DISCOVERY A NEW WORLD`}</Title>
                <Description>{`A melhor experiência passada através das lentes.`}</Description>
            </ContainerTitle>

            {/* Primeira Linha */}
            <ContainerTumb>
                <Tumb>
                    <Link style={{ textDecoration: 'none' }} to={"/"}>
                        <img src={Arraia} />
                        <ContainerLocale>
                            <City>{"CABO"}</City>
                            <State>{"PERNAMBUCO"}</State>
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
                </Tumb>

                <Tumb>
                    <Link style={{ textDecoration: 'none' }} to={"/"}>
                        <img src={CaboA} />
                        <ContainerLocale>
                            <City>{"ARRAIÁ DO CABO"}</City>
                            <State>{"PERNAMBUCO"}</State>
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
                </Tumb>

                <Tumb>
                    <Link style={{ textDecoration: 'none' }} to={"/"}>
                        <img src={Farol} />
                        <ContainerLocale>
                            <City>{"FAROL DE SALVADOR"}</City>
                            <State>{"BAHIA"}</State>
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
                </Tumb>
            </ContainerTumb>

            <Footer />
        </Page>
    )
}
