import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

import FooterFinalizarCompra from '../../components/Footer/FooterFinalizarCompra';
import HeaderFinalizarCompra from '../../components/Headers/HeaderFinalizarCompra'
import TableItems from '../../components/TableItems'
import { Container, Header, Main, Item, Footer } from './styles'

const Cart = () => {

    const cart = useSelector(state => state.cart.Cart)

    console.log(cart)

    return (
        <Container>
            <HeaderFinalizarCompra />

            <Main>
                <span>
                    <h1>Carrinho de Compras</h1>
                    <p>confira seus itens adicionados</p>
                </span>

                <Item>
                    <TableItems />
                </Item>

                <div>
                    <Link to={'/'}>
                        <button className='continuar'>CONTINUAR COMPRANDO</button>
                    </Link>
                    <Link to={'/Checkout/Finalizar'}>
                        <button className='concluir'>CONCLUIR PEDIDO</button>
                    </Link>
                </div>
            </Main>

            <FooterFinalizarCompra />
        </Container>
    )
}

export default Cart