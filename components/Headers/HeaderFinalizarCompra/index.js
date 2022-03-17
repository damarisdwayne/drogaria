import React from 'react'
import {Link} from 'react-router-dom'

import { Container, Main, LockIcon } from './styles'

const HeaderFinalizarCompra = () => {
    return (
        <Container>
            <Main>
                <Link style={{textDecoration: 'none', color:'inherit'}} to='/'>
                <h1>DROGAMAXI</h1>
                </Link>
                <div>
                    <LockIcon />
                    <span>Ambiente <br />
                        <strong>100% Seguro</strong>
                    </span>
                </div>
            </Main>
        </Container>
    )
}

export default HeaderFinalizarCompra;