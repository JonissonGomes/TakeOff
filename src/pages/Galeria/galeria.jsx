import React, { useState } from 'react';
import Select from 'react-select';

import { Page, ContainerTitle, Title, Description, ContainerFilter, FilterLabel, ContainerSelect } from './styles.jsx';


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


    const [selectOptionsFilter, setSelectOptinsFilter] = useState(filter[0]);
    const [selectOptionsRegioes, setSelectOptinsRegioes] = useState(regioes[0]);


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
                        onChange={setSelectOptinsFilter}
                        options={filter}
                    />
                </ContainerSelect>         

                <FilterLabel>Região:</FilterLabel>

                <ContainerSelect>
                    <Select
                        defaultValue={selectOptionsRegioes}
                        onChange={setSelectOptinsRegioes}
                        options={regioes}
                    />
                </ContainerSelect>
            </ContainerFilter>

            <Footer />

        </Page>

    )
}
