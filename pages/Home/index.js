import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

import {
    Container,
    BanerSlider,
    PaymentInfoSection,
    AdvertisingSection,
    CardIcon, TruckIcon,
    DrugstoreIcon,
    LockIcon,
    ImgLarger,
    ImgSmall,
    PopularProductsContainer,
    ProductPopular,
    AdvertisementSection,
    ImagesAdvertisement,
    MarkingContainer, Marking,
    TittlePopularProducts,
    HorizontalLine,
    Form,
    TextForm,
    FormFields,
    AdvertisementProductsSaleSection,
    ProductsAdvertisement,
    ImageAdvertisement,
    AdvertisementSaleBanner
} from './styles';

import { Product } from '../../components/Product'
import { SettingsBannerMain } from '../../utils/Settings/SettingsBannerMain'
import { SettingsMarks } from '../../utils/Settings/SettingsMarks'
import { SettingsProducts } from '../../utils/Settings/SettingsProducts';

const Home = () => {

    const productsList = useSelector(state => state.products)

    const settingsBanner = SettingsBannerMain
    const settingsMarks = SettingsMarks
    // const settingsProducts = SettingsProducts

    return (
        <Container>
            {/* <BanerSlider>
                <Slider {...settingsBanner}>
                    <div className='first'>
                        <img src='https://io.convertiez.com.br/m/drogamaxi/uploads/promo_semanais/banner-cotidian_bSQXXqv.jpg' />
                    </div >
                    <div className='second'>
                        <img src='https://io.convertiez.com.br/m/drogamaxi/uploads/promo_semanais/banner-cotidian_bSQXXqv.jpg' />
                    </div>
                    <div className='third'>
                        <img src='https://io.convertiez.com.br/m/drogamaxi/uploads/promo_semanais/banner-cotidian_bSQXXqv.jpg' />
                    </div>
                </Slider>
            </BanerSlider> */}
            <PaymentInfoSection>
                <div>
                    <CardIcon />
                    <span><strong>5X SEM JUROS</strong><br /> no cartão de crédito</span>
                </div>
                <div>
                    <TruckIcon />
                    <span><strong>FRETE GRÁTIS</strong><br /> confira regras</span>
                </div>
                <div>
                    <DrugstoreIcon />
                    <span><strong>MAIS DE 39 ANOS</strong><br /> 26 lojas físicas</span>
                </div>
                <div>
                    <LockIcon />
                    <span><strong>LOJA 100% SEGURA</strong> <br /> saiba mais</span>
                </div>
            </PaymentInfoSection>

            <AdvertisingSection>
                <ImgLarger>
                    <div >
                    </div>
                </ImgLarger>

                <ImgSmall>
                    <div>
                    </div>
                    <div>
                    </div>
                </ImgSmall>

                <ImgSmall>
                    <div>
                    </div>
                    <div>
                    </div>
                </ImgSmall>
            </AdvertisingSection>

            <PopularProductsContainer>

                <TittlePopularProducts>
                    <h3>MAIS POPULARES</h3>
                    <HorizontalLine></HorizontalLine>
                </TittlePopularProducts>

                <ProductPopular>
                    {productsList?.map(item => {
                        return (
                            <Product
                                key={item.id_product}
                                product={item}
                            />
                        )
                    })}
                </ProductPopular>


            </PopularProductsContainer>

            <AdvertisementSection>
                <ImagesAdvertisement>
                    <div></div>
                    <div></div>
                </ImagesAdvertisement>
            </AdvertisementSection>

            <MarkingContainer>
                <TittlePopularProducts>
                    <h3>TEMOS AS MELHORES MARCAS</h3>
                    <HorizontalLine></HorizontalLine>
                </TittlePopularProducts>

                <Marking>
                    <Slider {...settingsMarks}>
                        <div>
                            <div className='first'>
                            </div>
                        </div>

                        <div>
                            <div className='first'>
                            </div>
                        </div>

                        <div>
                            <div className='first'>
                            </div>
                        </div>
                        <div>
                            <div className='fourth'>
                            </div>
                        </div>

                        <div>
                            <div className='fifth'>
                            </div>
                        </div>

                    </Slider>
                </Marking>
            </MarkingContainer>

            <Form method='#'>
                <TextForm>
                    <strong>Recebas as novidades e <br />ofertas por email</strong>
                    <span>Cadastre-se e <br />ganhe 5% off</span>
                </TextForm>
                <FormFields>
                    <input type='text' placeholder='Qual seu nome?'></input>
                    <input type='text' placeholder='Digite aqui seu e-mail'></input>
                    <button type='submit'>ENVIAR</button>
                </FormFields>
            </Form>

            <AdvertisementProductsSaleSection>
                <ImageAdvertisement>
                    <div></div>
                </ImageAdvertisement>

                <ProductsAdvertisement>
                    <div>
                        {/* <Slider {...settingsProducts}>
                            <Product
                                product={productsList}
                            />
                        </Slider> */}
                    </div>
                </ProductsAdvertisement>
            </AdvertisementProductsSaleSection>

            <AdvertisementProductsSaleSection>
                <ImageAdvertisement>
                    <div></div>
                </ImageAdvertisement>

                <ProductsAdvertisement>
                    <div></div>
                </ProductsAdvertisement>
            </AdvertisementProductsSaleSection>

            <AdvertisementSaleBanner>
                <div></div>
            </AdvertisementSaleBanner>

        </Container>
    )
}

export default Home;