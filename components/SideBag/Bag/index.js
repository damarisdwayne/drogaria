import React from 'react';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../../store/actions/cart';

import HeaderBag from '../HeaderBag'
import Products from './ProductBag'
import {
    InputWrapper,
    Container,
    Main,
    Product,
    PaymentInfo,
    Input,
    ButtonInput,
    ButtonFinalizaBuy,
    CardIcon,
    Total
} from './styles';

const Bag = () => {

    const cart = useSelector(state => state.cart)

    let totalPrice = 0;

    for (let i = 0; i < cart.Cart.length; i++) {
        totalPrice += (cart.Cart[i].price * cart.Cart[i].quantity)
    }

    function handleToggleBag() {
        if (window.toggleActiveMenu) window.toggleCloseMenu();
    }

    return (
        <Container>
            <HeaderBag />

            <Main>
                <Product>
                    {cart.Cart.map(item => {
                        return (
                            <Products item={item} />
                        )
                    })}
                </Product>

                <PaymentInfo>
                    <Total>
                        <div>
                            <div>
                                <span>Subtotal</span>
                                <strong>R$ {totalPrice.toFixed(2)}</strong>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>Desconto</span>
                                <strong>R$ 0,00</strong>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span>Total</span>
                                <strong>R$ {totalPrice.toFixed(2)}</strong>
                            </div>
                        </div>
                    </Total>

                    <InputWrapper>
                        <Input placeholder='Cupom de desconto' />
                        <ButtonInput>Aplicar</ButtonInput>
                    </InputWrapper>
                    <div>
                        <Link to={'/Checkout/Finalizar'}>
                            <ButtonFinalizaBuy onClick={handleToggleBag}>FINALIZAR COMPRA</ButtonFinalizaBuy>
                        </Link>
                        <p className='parcelas'> <CardIcon />Em até <strong>5x sem juros</strong> no cartão de crédito</p>
                    </div>
                </PaymentInfo>
            </Main>
        </Container>
    );
};

export default Bag;