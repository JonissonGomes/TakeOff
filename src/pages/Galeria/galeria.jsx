import React, { useState } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

import { Page, ContainerTitle, Title, Description, ContainerFilter, FilterLabel, ContainerSelect, Button, Clear, ContainerImages, Content, Image, Cidade, Estado, More, Redes, ContainerInfo } from './styles.jsx';


import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

import Farol from '../../Assets/farol.png';

export default function Galeria() {

    const filter = [
        { value: 0, label: 'Mais Recente' },
        { value: 1, label: 'Mais Antigo' },
        { value: 2, label: 'Maior avaliação' },
        { value: 3, label: 'Menor avaliação' },
    ];

    const regioes = [
        { value: 0, label: 'Todas' },
        { value: 1, label: 'Região norte' },
        { value: 2, label: 'Região nordeste' },
        { value: 3, label: 'Região sul' },
        { value: 4, label: 'Região sudeste' },
        { value: 5, label: 'Região centroeste' },
    ];

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

    const [selectOptionsFilter, setSelectOptionsFilter] = useState(filter[0]);
    const [selectOptionsFilterOld, setSelectOptionsFilterOld] = useState(filter[0]);
    const [selectOptionsRegioes, setSelectOptionsRegioes] = useState(regioes[0]);
    const [selectOptionsRegioesOld, setSelectOptionsRegioesOld] = useState(regioes[0]);

    function aplicarFiltro() {
        console.log('Filtrei por:', selectOptionsFilter);
        setSelectOptionsFilterOld(selectOptionsFilter);

        console.log('Filtrei pela região:', selectOptionsRegioes);
        setSelectOptionsRegioesOld(selectOptionsRegioes);
    }

    function resetFiltro() {
        console.log('Limpando os filtros:');
        setSelectOptionsFilterOld(filter[0]);
        setSelectOptionsFilter(filter[0]);
    }

    return (
        <Page>
            <Header />

            <ContainerTitle>
                <Title>{`CHANGE YOUR WAY OFF VIEWING THE WORLD`}</Title>
                <Description>{`Cada momento é único em nossas vidas, então lembre cada um deles.`}</Description>
            </ContainerTitle>

            <ContainerFilter>
                <FilterLabel>Filtro:</FilterLabel>

                <ContainerSelect>
                    <Select
                        defaultValue={selectOptionsFilter}
                        onChange={setSelectOptionsFilter}
                        options={filter}
                    />
                </ContainerSelect>

                <FilterLabel>Região:</FilterLabel>

                <ContainerSelect>
                    <Select
                        defaultValue={selectOptionsRegioes}
                        onChange={setSelectOptionsRegioes}
                        options={regioes}
                    />
                </ContainerSelect>

                {selectOptionsFilter != selectOptionsFilterOld && selectOptionsRegioes === selectOptionsRegioesOld &&
                    <>
                        <Button onClick={aplicarFiltro}>Aplicar filtro</Button>
                        <Clear onClick={resetFiltro}> X </Clear>
                    </>
                }

                {selectOptionsRegioes != selectOptionsRegioesOld && selectOptionsFilter === selectOptionsFilterOld &&
                    <>
                        <Button onClick={aplicarFiltro}>Aplicar filtro</Button>
                        <Clear onClick={resetFiltro}> X </Clear>
                    </>
                }

                {selectOptionsRegioes != selectOptionsRegioesOld && selectOptionsFilter != selectOptionsFilterOld &&
                    <>
                        <Button onClick={aplicarFiltro}>Aplicar filtros</Button>
                        <Clear onClick={resetFiltro}> X </Clear>
                    </>
                }

            </ContainerFilter>

            <ContainerImages>
                {Galery.map((item) =>
                    <Content>
                        <Image src={Farol} />
                        <ContainerInfo>
                            <Cidade>{item.cidade}</Cidade>
                            <Estado>{item.estado}</Estado>
                            <Link style={{ textDecoration: 'none' }} to="/">
                                <More>Ver mais</More>
                            </Link>

                            <Redes>
                                {item.instagram != '' &&
                                    <>
                                        <Link style={{ textDecoration: 'none' }} to="/">
                                            <Icon icon="entypo-social:instagram" fontSize={20} color="White" />
                                        </Link>
                                    </>
                                }

                                {item.youtube != '' &&
                                    <>
                                        <Link to="/">
                                            <Icon icon="ant-design:youtube-filled" fontSize={30} color="White" />
                                        </Link>
                                    </>

                                }

                                {item.pinterest != '' &&
                                    <>
                                        <Link to="/">
                                            <Icon icon="akar-icons:whatsapp-fill" fontSize={20} color="White" />
                                        </Link>
                                    </>
                                }
                            </Redes>
                        </ContainerInfo>
                    </Content>
                )}
            </ContainerImages>

            <Footer />

        </Page >

    )
}
