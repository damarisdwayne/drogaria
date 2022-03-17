import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

import { Container, Header, HorizontalLine, Main } from './styles'

const ResumoPedido = () => {

    const cart = useSelector(state => state.cart)

    return (
        <Container>
            <Header>
                <h1>Resumo pedido</h1>
            </Header>

            <Main>
                {cart.Cart?.map(item => {
                    return (
                        <li>
                            <span>{item.quantity}</span>
                            <img src={item.image} className='imgProduct' />
                            <div className='contentProduct'>
                                <h2>{item.name}</h2>
                                <span>R$ {item.price}</span>
                            </div>
                        </li>
                    )
                })}
                <Link to={'/Checkout/Carrinho'} style={{alignSelf: 'flex-end'}}>
                    <button>Voltar para o carrinho</button>
                </Link>
                <div className='subtotal'>
                    <div>
                        <strong>Subtotal:</strong>
                        <span>R$ 59,90</span>
                    </div>
                    <div>
                        <strong>Entrega:</strong>
                        <span>R$ 10,69</span>
                    </div>
                    <div>
                        <strong>Total:</strong>
                        <span className="preco">R$ 70,59</span>
                    </div>

                </div>
            </Main>
        </Container>
    )
}

export default ResumoPedido