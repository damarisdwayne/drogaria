import { useState } from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'

declare global {
    interface Window {
        toggleActiveModal: (() => void) | undefined;
    }
}

const CardProdutoAdicionado = () => {
    const [isActive, setIsActive] = useState(true);

    const className = isActive ? 'open' : '';

    function toggleActiveModal() {
        setIsActive(!isActive);
    }

    window.toggleActiveModal = toggleActiveModal;

    return (
        <Container className={className}>
            <div>
                <div>
                    <span>
                        <h1>Produto adicionado em seu carrinho</h1>
                        <button className='close' onClick={toggleActiveModal}>X</button>
                    </span>
                    <p>O que deseja fazer agora?</p>
                    <span>
                        <button className='continuar' onClick={toggleActiveModal}>CONTINUAR COMPRANDO</button>

                        <button className='finalizar'>
                            <Link to={'/Checkout/Finalizar'} style={{ textDecoration: 'none', color: 'inherit' }}>FINALIZAR COMPRA</Link>
                        </button>

                    </span>
                </div>
            </div>
        </Container>
    )
}

export default CardProdutoAdicionado