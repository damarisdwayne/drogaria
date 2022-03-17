import { Container, Header, Main, UserIcon } from './styles'

const DadosPessoais = (props) => {
    return (
        <Container>
            <Header>
                <UserIcon />
                <h1>Dados Pessoais</h1>
            </Header>

            <Main>
                <p>Solicitamos apenas as informações essenciais para a realização da compra</p>
                <label>
                    *E-mail
                    <input type='text' />
                </label>
                <label>
                    *Nome completo
                    <input type='text' />
                </label>
                <div>
                    <label>
                        *CPF
                        <input type='text' />
                    </label>
                    <label>
                        *Telefone
                        <input type='text' />
                    </label>
                </div>
                <span>Incluir dados de Pessoa Jurídica</span>
                <label className='checkbox'>
                    <input type='checkbox' />
                    Receber avisos de ofertar por e-mail?
                </label>
                <button onClick={props.CloseModal}>Continuar</button>
            </Main>
        </Container>
    )
}
export default DadosPessoais