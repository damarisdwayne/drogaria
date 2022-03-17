import React, { useState } from 'react'

import HeaderCard from '../../../../components/HeaderCardFinalizar'
import { Container, Main} from './styles'

const CardEntregasClosed = (props) => {
    
    return (
        <Container>
            <HeaderCard name='Entrega' OpenModal={props.OpenModal}/>

            <Main>
                <p>Aguardando preenchimento dos dados</p>
            </Main>
        </Container>
    )
}
export default CardEntregasClosed