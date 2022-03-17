import React from 'react'

// import FooterFinalizarCompra from '../../components/Footers/FooterFinalizarCompra'
import { Container, FooterFinalizarCompra } from './styles'

const InputLogar = () => {
    return (
        <Container>
            <span>
                <h1>Identificação</h1>
                <button>IR PARA O CARRINHO</button>
            </span>
            <div>
                <h2>Finalize sua compra informando seu email</h2>
                <input type='text' />
                <p>Ou use uma das opções para fazer login *</p>
                <p>Seus dados serão preservados e nada será publicado em sua timeline</p>
            </div>
        </Container>
    )
}

export default InputLogar