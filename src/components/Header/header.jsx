import React, { useState } from 'react'

import SocialMedia from '../SocialMedia/social.jsx'
import { Container, Indices, ContainerLogo, ContainerIndices } from './styles'
import Logo from '../../Assets/Logo.png'
import { Link } from 'react-router-dom'

export default function Header() {

    const [outline, setOutline] = useState('none');

    return (
        <Container>
            <ContainerLogo>
                <img src={Logo} />
            </ContainerLogo>

            <ContainerIndices>
                <Link style={{ textDecoration: 'none'}} to="/">
                    <Indices>Inicio</Indices>
                </Link>
                <Link style={{ textDecoration: 'none'}} to="/">
                    <Indices>Galeria</Indices>
                </Link>

                <Link style={{ textDecoration: 'none'}} to="/Portifolio">
                    <Indices>Portifolio</Indices>
                </Link>

                <Link style={{ textDecoration: 'none'}} to="/">
                    <Indices>Sobre</Indices>
                </Link>

            </ContainerIndices>

            <SocialMedia />

        </Container>
    )
}
