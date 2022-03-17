import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../../../store/actions/cart';

import { Container, ImageWrapper, ImageProduct, Main, IconDelete } from './styles'

const ProductBag = ({ item }) => {

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();

    function increment() {
        dispatch(cartActions.AddItem(cart, item))
    }

    function decrement() {
        dispatch(cartActions.RemoveItem(cart, item))
    }

    return (
        <Container>
            <ImageWrapper>
                <ImageProduct src={item.image} />
            </ImageWrapper>
            <Main>
                <h3>{item.name}</h3>
                <div>
                    <span>
                        <strong>{item.price.toFixed(2)}</strong>
                        <span className='btn-quantity'>
                            <button onClick={() => decrement()}>-</button>
                            <p>{item.quantity}</p>
                            <button onClick={() => increment()}>+</button>
                        </span>
                    </span>
                    <button onClick={() => dispatch(cartActions.DeleteItem(cart, item))}>
                        <IconDelete />
                    </button>
                </div>
            </Main>
        </Container>
    )
}

export default ProductBag