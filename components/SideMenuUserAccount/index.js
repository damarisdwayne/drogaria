import React from "react"
import { Link } from 'react-router-dom';

import Open from './Open'
import { Container } from './styles'

const SideMenuUserAccount = () => {
    return (
        <Container>
            <Open />
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
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/Minha-Conta/Enderecos'>
                    <span>Endereços de Entrega</span>
                </Link>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/Minha-Conta/Cartoes'>
                    <span>Meus Cartões de Crédito</span>
                </Link>
            </div>
        </Container>
    )
}

export default SideMenuUserAccount

