import React, { useState } from 'react'

import HeaderFinalizarCompra from '../../../components/Headers/HeaderFinalizarCompra'
import InputLogar from './LogarParaFinalizarPedido'
import DadosFinalizarCompra from './DadosFinalizarCompra'
import { Container, Main, FooterFinalizarCompra } from './styles'

const FinalizarPedido = () => {
    const [logged, setLogged] = useState(true)

    return (
        <Container>
            <HeaderFinalizarCompra />
            <Main>
                {!logged ? <InputLogar /> : <DadosFinalizarCompra />}
            </Main>
            <FooterFinalizarCompra />
        </Container>
    )
}

export default FinalizarPedido
