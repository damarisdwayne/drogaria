import React from 'react';

import { Container, Navigation, Main, UserIcon } from './styles';

const Menu: React.FC = () => {
    function handleToggle() {
        if (window.toggleActiveSideMenu) window.toggleActiveSideMenu();
    }

    return (
        <Container>
            <Navigation>
                <h1>
                    <UserIcon />
                    <span>Olá, visitante!</span>
                </h1>
                {/* ✕ chacter in video description */}
                <button className="action--close" onClick={handleToggle}>
                    ✕
                </button>
            </Navigation>

            <Main>
                <ul>
                    <li><a href="#">Medicamentos</a></li>
                    <li><a href="#">Higiene e beleza</a></li>
                    <li><a href="#">Infantil</a></li>
                    <li><a href="#">Geriátrico</a></li>
                    <li><a href="#">Suplementos</a></li>
                    <li><a href="#">Acessórios</a></li>
                    <li><a href="#">Conveniência</a></li>
                    <li><a href="#">Ofertas</a></li>
                </ul>
            </Main>

        </Container>
    );
};

export default Menu;