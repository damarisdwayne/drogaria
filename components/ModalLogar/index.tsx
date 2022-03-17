import { useState } from 'react';
import { 
    Container,
    Main, 
    FacebookIcon, 
    GoogleIcon, 
    KeyIcon, 
    AtIcon 
} from './styles'

declare global {
    interface Window {
        toggleActiveModalLogar: (() => void) | undefined;
    }
}

const ModalLogar = () => {
    const [isActive, setIsActive] = useState(false);

    const className = isActive ? 'open' : '';

    function toggleActiveModalLogar() {
        setIsActive(!isActive);
    }

    window.toggleActiveModalLogar = toggleActiveModalLogar;

    return (
        <Container className={className}>
            <Main>
                <p>Use uma das opções abaixo para fazer login</p>
                <div>
                    <button className='btnEmail'><KeyIcon /> Entrar com email e senha</button>
                </div>
                <div>
                    <button className='btnFacebook'><FacebookIcon /> Entrar com o Facebook</button>
                </div>
                <div>
                    <button className='btnGoogle'><GoogleIcon /> Entrar com o Google</button>
                </div>
                <div>
                    <button className='btnAt'> <AtIcon />Receber um código de acesso no email</button>
                </div>
            </Main>
        </Container>
    )
}

export default ModalLogar