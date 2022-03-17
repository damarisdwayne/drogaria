import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { Container, MenuClose, ArrowDownIcon, ArrowUpIcon } from './styles'

const OpenMenu = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <Container>
            <MenuClose onClick={() => setMenuOpen(!menuOpen)}>
                <h1>Minha Conta</h1>
                {menuOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </MenuClose>
            {menuOpen &&
                <>
                    <div className="menu-open">
                        <h1>Meus Pedidos</h1>

                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/Minha-Conta/Meus-Pedidos'>
                            <span>Todos os pedidos</span>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/Minha-Conta/Meus-Pedidos'>
                            <span>Pedidos Abertos</span>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/Minha-Conta/Meus-Pedidos'>
                            <span>Pedidos Entregues</span>
                        </Link>
                    </div>
                    <div className="menu-open">
                        <h1>Meus Dados</h1>
                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/Minha-Conta/Alterar-Senha'>
                            <span>Alterar senha</span>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/Minha-Conta/Alterar-Dados'>
                            <span>Alterar dados cadastrais</span>
                        </Link>
                        <span>Endereços de Entrega</span>
                        <span>Meus Cartões de Crédito</span>
                    </div>
                </>
            }
        </Container>
    )
}

export default OpenMenu

