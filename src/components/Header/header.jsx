import React from 'react'

import SocialMedia from '../SocialMedia/social.jsx'
import { Container, Indices, ContainerLogo, ContainerIndices } from './styles'
import Logo from '../../Assets/Logo.png'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <Container>
            <ContainerLogo>
                <img src={Logo} />
            </ContainerLogo>

            <ContainerIndices>
                <Link to="/">
                    <Indices>Inicio</Indices>
                </Link>
                <Link to="/">
                    <Indices>Galeria</Indices>
                </Link>

                <Link to="/">
                    <Indices>Portifolio</Indices>
                </Link>

                <Link to="/">
                    <Indices>Sobre</Indices>
                </Link>

            </ContainerIndices>

            <SocialMedia />

        </Container>
    )
}
