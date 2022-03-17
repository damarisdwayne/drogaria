import React, { useState } from 'react';

import { Container, SideMenu, Main, Header, HorizontalLine } from './styles';
import { Input } from '../../../../components/Input'
import SideMenuAccountUser from '../../../../components/SideMenuUserAccount';

const AlterarDados = () => {

    const [name, setName] = useState('')

    return (
           <Container>
                <SideMenuAccountUser />

                <Main>
                    <h1>Alterar dados cadastrais</h1>
                    <HorizontalLine/>

                    <form>
                        <label>
                            <strong>*Nome</strong>
                            <input type='text' value={name} onChangeText={(text) => setName(text)} className='input' />
                        </label>
                        <label>
                            <strong>CPF <span>Somente números</span></strong>
                            <input type='text' value={name} onChangeText={(text) => setName(text)} className='input' />
                        </label>
                        <label>
                            <strong>*Telefone<span>Somente números</span></strong>
                            <input type='text' value={name} onChangeText={(text) => setName(text)} className='input' />
                        </label>
                        <label>
                            <strong>Razão Social</strong>
                            <input type='text' value={name} onChangeText={(text) => setName(text)} className='input' />
                        </label>
                        <label>
                            <strong>Nome fantasia</strong>
                            <input type='text' value={name} onChangeText={(text) => setName(text)} className='input' />
                        </label>
                        <label>
                            <strong>I.E Isento?</strong>
                            <input type='checkbox' className='inputCheck'/>
                        </label>
                        <label>
                            <strong>Inscrição Estadual</strong>
                            <input type='text' value={name} onChangeText={(text) => setName(text)} className='input' />
                        </label>
                        <label>
                            <strong>CNPJ<span>Somente números</span></strong>
                            <input type='text' value={name} onChangeText={(text) => setName(text)} className='input' />
                        </label>
                    </form>

                    <h1>E-mail de ofertas</h1>
                    <HorizontalLine/>

                    <div>
                        <p>Desejo receber avisos de ofertas por e-mail?</p>
                        <div>
                            <label>
                                <input type='checkbox' />
                                <strong>Sim</strong>
                            </label>
                            <label>
                                <input type='checkbox' />
                                <strong>Não</strong>
                            </label>
                        </div>
                    </div>

                    <button>Salvar alterações</button>
                </Main>
            </Container>
    )
}

export default AlterarDados