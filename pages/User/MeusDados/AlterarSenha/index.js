import React, { useState } from 'react';

import { Container, Main, HorizontalLine } from './styles';
import SideMenuAccountUser from '../../../../components/SideMenuUserAccount';

const AlterarSenha = () => {

    const [name, setName] = useState('')

    return (
           <Container>
                <SideMenuAccountUser />

                <Main>
                    <h1>Alterar Senha</h1>
                    <HorizontalLine/>

                    <form>
                        <label>
                            <strong>*Senha atual</strong>
                            <input type='text' value={name} onChangeText={(text) => setName(text)} className='input' />
                        </label>
                        <label>
                            <strong>*Nova senha</strong>
                            <input type='text' value={name} onChangeText={(text) => setName(text)} className='input' />
                        </label>
                        <label>
                            <strong>*Repita sua nova senha</strong>
                            <input type='text' value={name} onChangeText={(text) => setName(text)} className='input' />
                        </label>
                    </form>

                    <button>Salvar alterações</button>
                </Main>
            </Container>
    )
}

export default AlterarSenha