import { Link } from 'react-router-dom'

import { Container, BasketIcon, ArrowIcon, CloseIcon } from './styles'

const HeaderBag = () => {

    function handleToggle() {
        if (window.toggleActiveMenu) window.toggleCloseMenu();
    }

    return (
        <Container>
            <div>
                <button className="action--close" onClick={handleToggle}>
                    <CloseIcon />
                </button>
                <p>
                    <BasketIcon />
                    <span>Cesta de compras</span>
                </p>
                <Link to={'/Checkout/Carrinho'}>
                    <ArrowIcon />
                </Link>
            </div>
        </Container >
    )
}

export default HeaderBag