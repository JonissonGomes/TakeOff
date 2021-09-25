import React, { useState } from 'react';
import Select from 'react-select';

import { Page, ContainerTitle, Title, Description, ContainerFilter, FilterLabel, ContainerSelect, Button, Clear } from './styles.jsx';


import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

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

            <Footer />

        </Page >

    )
}
