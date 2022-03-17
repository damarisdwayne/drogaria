import React, { useState } from 'react'
import HeaderCard from '../../../../components/HeaderCardFinalizar'

import { Container, Header, Main, UserIcon, PenIcon } from './styles'

const DadosPessoaisClosed = (props) => {
    return (
        <Container>
            <HeaderCard name='Dados Pessoais' OpenModal={props.OpenModal} />

            <Main>
                <span>
                    <p>damaris@bhsoftwares.com.br</p>
                    <strong>não é você? - Sair</strong>
                </span>
                <p>Dâmaris Dwayne da Silva</p>
                <p>(31) 98582-1296</p>
            </Main>
        </Container>
    )
}
export default DadosPessoaisClosed