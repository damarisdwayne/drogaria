import { Link } from 'react-router-dom';
import { Container, InfoUserAccount, InfoContactDrugstore, Contact, SocialMedia, TelIcon, WhatsappIcon, FacebookIcon, TwitterIcon, InstagramIcon } from "./styles"

export const HeaderInfo = () => {

    function handleToggleModal() {
        if (window.toggleActiveModalLogar) window.toggleActiveModalLogar();
    }

    return (
        <Container>
            <InfoUserAccount>
                <span onClick={() => handleToggleModal()}>Minha conta</span>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/Minha-Conta/Meus-Pedidos' >
                    <span>Meus pedidos</span>
                </Link>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/Checkout/Finalizar'>
                    <span>Finalizar pedido</span>
                </Link>
            </InfoUserAccount>
            <InfoContactDrugstore>
                <Contact>
                    <span><TelIcon />(31) 3317-6070</span>
                    <a><WhatsappIcon />(31) 99563-6040</a>
                </Contact>
                <SocialMedia>
                    <a href=""><FacebookIcon /></a>
                    <a href=""><TwitterIcon /></a>
                    <a href=""><InstagramIcon /></a>
                </SocialMedia>
            </InfoContactDrugstore>
        </Container>
    )
}

