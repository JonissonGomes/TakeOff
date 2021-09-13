import React from 'react';
import { Page, Container, ContainerHello, Title, Subtitle, Description, Button, ContainerImages } from './styles.jsx';

import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

import Panel from '../../Assets/panel.png'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <Page>
            <Header />
            <Container>
                <ContainerHello>
                    <Title>{`FREE`}</Title>
                    <Subtitle>{`YOURSELF`} </Subtitle>
                    <Description>{`Uma descrição bem topada sobre mim ou sobre meu trabalho onde
                     as pessoas poderão se engajar em ver meu conteúdo nas
                      redes sociais e até mesmo compartilhar com os amigos.`}</Description>
                    <Link style={{ textDecoration: 'none'}} to={"/portifolio"}>
                        <Button>Começar tour</Button>
                    </Link>
                </ContainerHello>

                <ContainerImages>
                    <img src={Panel} />
                </ContainerImages>
            </Container>

            <Footer />
        </Page>
    )
}
