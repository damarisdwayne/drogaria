import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import cartActions from '../../components/store/actions/cart';

import ProductReview from './ProductReview'
import {
    Container,
    Header,
    ProductContainer,
    ProductImageWrapper,
    ProducImage,
    ProductContent,
    ProductDescription,
    TrcuckIcon
} from './styles'
import CardProdutoAdicionado from '../../components/ModalProdutoAdicionadoNoCarrinho';


const Product = () => {

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart)

    const [number, setNumber] = useState(0);

    const productsList = useSelector(state => state.products)

    const params = useParams('/:idProduto')

    const { idProduto } = params

    let product = productsList.filter(id => id.id_product == idProduto)

    function handleToggleModal() {
        if (window.toggleActiveModal) window.toggleActiveModal();
    }

    function AddItemCart(product, number) {
        dispatch(cartActions.AddItemsCart(cart, product, number))
    }

    return (
        <Container>
            <Header>
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><span>.</span></li>
                    <li><a href="#">Medicamentos</a></li>
                    <li><span>.</span></li>
                    <li><a href="#">Acne e Espinhas</a></li>
                </ul>
                <h1>Acne e Espinhas</h1>
            </Header>
            <ProductContainer>
                {product?.map(item => {
                    return (
                        <>
                            <ProductImageWrapper>
                                <ProducImage src={item.image} />
                            </ProductImageWrapper>
                            <ProductContent>
                                <div className='header'>
                                    <h1>{item.name_product}</h1>
                                    <h3>DIPIRONA SÓDICA</h3>
                                    <span>Código: 1350</span>
                                    <ReactStars count={5} value={0} edit={false} isHalf activeColor="#e7711c" />
                                </div>
                                <div className='payment'>
                                    <div className='price'>
                                        <span>de R$ {item.price.toFixed(2)}</span>
                                        <strong>{item.price.toFixed(2)}</strong>
                                    </div>
                                    <div className='buttons'>
                                        <span className='btn-quantity'>
                                            <button onClick={() => setNumber(number === 0 ? number : number - 1)}>-</button>
                                            <p>{number}</p>
                                            <button onClick={() => setNumber(number + 1)}>+</button>
                                        </span>
                                        <button className='btn-comprar' onClick={() => {
                                            handleToggleModal()
                                            AddItemCart(item, number)
                                        }}>COMPRAR</button>
                                    </div>
                                </div>
                                <div className='cep'>
                                    <span className='iconCep'>
                                        <TrcuckIcon />
                                    </span>
                                    <div>
                                        <p>Calcule o prazo de entrega</p>
                                        <span>
                                            <input type='text' placeholder='Digite seu CEP'/>
                                            <button className='buttonCep'>Calcular</button>
                                        </span>

                                    </div>
                                    <div>

                                    </div>
                                </div>

                            </ProductContent>
                        </>
                    )
                })
                }

            </ProductContainer>

            <CardProdutoAdicionado />

            <ProductDescription>
                <div>
                    <h1>Aviso M.S.</h1>
                    <p>NÃO USE ESTE MEDICAMENTO DURANTE A GRAVIDEZ E EM CRIANÇAS MENORES DE TRÊS MESES DE IDADE. SE PERSISTIREM OS SINTOMAS, O MÉDICO DEVERÁ SER CONSULTADO.</p>
                </div>
                <div>
                    <h1>Indicações</h1>
                    <p>Anador é indicado como analgésico e antitérmico.</p>
                </div>
                <div>
                    <h1>Contraindicações</h1>
                    <p>Anador é contraindicado para pacientes com hipersensibilidade à dipirona sódica ou a qualquer um dos componentes da formulação ou a outras pirazolonas ou a pirazolidinas. Anador é contraindicado para pacientes que tenham desenvolvido broncoespasmo ou outras reações anafiláticas (isto é urticária, rinites, angioedema) com analgésicos tais como salicilatos, paracetamol, diclofenaco, ibuprofeno, indometacina, naproxeno. Ainda é contraindicado para crianças menores de 3 meses de idade ou pesando menos de 5 kg.</p>
                </div>
            </ProductDescription>

            <ProductReview />
        </Container>
    )

}

export default Product