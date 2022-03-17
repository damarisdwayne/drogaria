import { useState } from 'react'
import ResumoPedido from './ResumoPedido'
import { Container, Main } from './styles'

import CardDadosOpen from '../DadosFinalizarCompra/DadosPessoais/Open'
import CardDadosClosed from '../DadosFinalizarCompra/DadosPessoais/Closed'
import CardEntregaOpen from '../DadosFinalizarCompra/Entrega/Open'
import CardEntregaClosed from '../DadosFinalizarCompra/Entrega/Closed'
import CardPagamentoOpen from '../DadosFinalizarCompra/Pagamento/Open'
import CardPagamentoClosed from '../DadosFinalizarCompra/Pagamento/Closed'

const DadosFinalizarCompra = () => {

    const [ModalDados, setModalDados] = useState(true)
    const [ModalEntrega, setModalEntrega] = useState(false)
    const [ModalPagamento, setModalPagamento] = useState(false)

    const OpenModalDados = () => {
        setModalDados(true)
        setModalEntrega(false)
        setModalPagamento(false)
    }

    const CloseModalDados = () => {
        setModalDados(false)
        setModalEntrega(true)
    }

    const OpenModalEntrega = () => {
        setModalEntrega(true)
        setModalDados(false)
        setModalPagamento(false)
    }

    const CloseModalEntrega = () => {
        setModalEntrega(false)
        setModalPagamento(true)
    }

    const OpenModalPagamento = () => {
        setModalPagamento(true)
        setModalDados(false)
        setModalEntrega(false)
    }

    const CloseModalPagamento = () => {
        setModalPagamento(false)
    }

    return (
        <Container>
            <h1>Finalizar Compra</h1>
            <Main>
                <div className='col'>
                    <div className='row'>
                        <div className='card-dados'>
                            {ModalDados ? <CardDadosOpen CloseModal={CloseModalDados} /> : <CardDadosClosed OpenModal={OpenModalDados} />}
                        </div>
                        <div className='card-entrega'>
                        {ModalEntrega ? <CardEntregaOpen CloseModal={CloseModalEntrega} /> : <CardEntregaClosed OpenModal={OpenModalEntrega} />}
                        </div>
                    </div>
                    <div className='card-pagamento'>
                    {ModalPagamento ? <CardPagamentoOpen CloseModal={CloseModalPagamento} /> : <CardPagamentoClosed OpenModal={OpenModalPagamento} />}
                    </div>
                </div>
                <ResumoPedido />
            </Main>
        </Container>
    )
}

export default DadosFinalizarCompra