import React from 'react'
import { Page, Container, ContainerHello, Title, Subtitle, Description, Button, ContainerImages } from './styles.jsx'

import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

import Panel from '../../Assets/panel.png'

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
                    <Button>Começar tour</Button>
                </ContainerHello>

                <ContainerImages>
                    <img src={Panel}/>
                </ContainerImages>
            </Container>

            <Footer />
        </Page>
    )
}
