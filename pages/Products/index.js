import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import { Product } from '../../components/Product'
import Checkbox from '../../components/CheckBox'
import {
    Container,
    Header,
    Title,
    ProductContent,
    Main,
    Filters
} from './styles'

const Products = () => {

    const [productsFilter, setProductsFilter] = useState([])

    const products = useSelector(state => state.products)

    const [categorys, setCategorys] = useState(['pilula, liquido, injetavel'])

    const productFiltered = (text, filter) => {

        if(filter) {

            const blabla = productsFilter.filter(item => item.category === text)
            setProductsFilter(blabla)

        } else {


            const p = productsFilter.filter(item => item.category !== 'nenhum')
            setProductsFilter(p)


        }

    }

    useEffect(() => {
        setProductsFilter(products)
    }, [products])

    let texto = Checkbox

    console.log(texto.productFiltered)
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
                <Title>Acne e Espinhas</Title>
            </Header>
            <Main>
                <Filters>
                    <div>
                        <h1>Marcas</h1>
                        <ul>
                            <Checkbox text='pilula' products={productFiltered} setCategorys={setCategorys}/>
                        </ul>
                    </div>

                    <div>
                        <h1>Pricípio Ativo Resumido</h1>
                        <ul>
                            <li><input type='checkbox' /><span>Aché</span></li>
                            <li><input type='checkbox' /><span>Aché</span></li>
                            <li><input type='checkbox' /><span>ARTE NATIVA</span></li>

                        </ul>
                    </div>

                    <div>
                        <h1>Apresentação</h1>
                        <ul>
                            <li><input type='checkbox' /><span>Aché</span></li>
                            <li><input type='checkbox' /><span>Aché</span></li>
                            <li><input type='checkbox' /><span>Aché</span></li>
                            <li><input type='checkbox' /><span>Aché</span></li>
                            <li><input type='checkbox' /><span>ARTE NATIVA</span></li>
                            <li><input type='checkbox' /><span>ARTE NATIVA</span></li>
                        </ul>
                    </div>

                    <div>
                        <h1>Classificação</h1>
                        <ul>
                            <li><input type='checkbox' /><span>Aché</span></li>
                            <li><input type='checkbox' /><span>Actine</span></li>
                        </ul>
                    </div>
                </Filters>

                <ProductContent>
                    {productsFilter?.map(item => {
                        return (
                            <Product product={item} />
                        )
                    })}
                </ProductContent>
            </Main>
        </Container>
    )
}

export default Products