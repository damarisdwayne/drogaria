import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../../store/actions/cart';

import { Container, InputWrapper, Input, ButtonInput, InfoServiceUser, MenuIcon, ContactIcon, UserIcon, BasketIcon } from './styles'

export const HeaderInput = () => {

    const cart = useSelector(state => state.cart)

    function handleToggleMenu() {
        if (window.toggleActiveSideMenu) window.toggleActiveSideMenu();
    }

    function handleToggleBag() {
        if (window.toggleActiveMenu) window.toggleActiveMenu();
    }

    return (
        <Container>
            <MenuIcon className="menu" onClick={handleToggleMenu}/>
            <div className="logo">
                <h1>DROGAMAXI</h1>
                <InputWrapper>
                    <Input type="text" placeholder="Digite o que procura" />
                    <ButtonInput>BUSCAR</ButtonInput>
                </InputWrapper>
            </div>
            <InfoServiceUser>
                <div className="central">
                    <ContactIcon />
                    <span>Central de <br /> <strong>Atendimento</strong></span>
                </div>

                <div className="pedidos">
                    <UserIcon />
                    <span>Login <br /> <strong>Meus pedidos</strong></span>
                </div>

                <div className="cesta" onClick={handleToggleBag}>
                    <p>{cart.value}</p>
                    <BasketIcon />
                    <span>
                        Minha cesta <br />
                        <strong className="price">R$ 0, 00</strong>
                    </span>
                </div>
            </InfoServiceUser>
        </Container>
    )
}

