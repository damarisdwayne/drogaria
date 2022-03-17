import React, { useState } from "react"
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../store/actions/cart'

import { Container, ProductInfo, ProcuctImage, ProductContent, OldPrice, Price } from './styles'

export const Product = ({ product }) => {

    const cart = useSelector(state => state.cart.value)
    const dispatch = useDispatch();

    function handleToggle() {
        if (window.toggleActiveMenu) window.toggleActiveMenu();
    }

    return (
        <Container>
            <ProductInfo>
                <Link to={`/${product.id_product}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ProcuctImage src={product.image} />
                </Link>
                <div>
                    <ProductContent>
                        <p>{product.name_product}</p>
                        {/* <Star /> */}
                        <ReactStars count={5} value={5} edit={true} isHalf activeColor="#e7711c" />
                        <OldPrice>{product.oldPrice}</OldPrice>
                        <Price>R$ {product.price}</Price>

                        <div className="btns">
                            {/* <span className='btn-quantity'>
                                <button onClick={() => setNumber(number === 0 ? number : number - 1)}>-</button>
                                <p>{product.quantity}</p>
                                <button onClick={() => setNumber(number + 1)}>+</button>
                            </span> */}
                            <button
                                className='btn-comprar'
                                onClick={() => {
                                    dispatch(cartActions.Add(cart, product))
                                    handleToggle()
                                }}
                            >COMPRAR</button>
                        </div>
                    </ProductContent>
                </div>
            </ProductInfo>
        </Container>
    )
}