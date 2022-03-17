import { Container, Header, Main, TextEndereco, TruckIcon, SelectFrete } from './styles'

const DadosPessoais = (props) => {
    return (
        <Container>
            <Header>
                <TruckIcon />
                <h1>Entrega</h1>
            </Header>

            <Main>
                <label className='inputCep'>
                    *CEP
                    <input type='text' />
                </label>

                <TextEndereco>
                    <p>Não sabe seu CEP?</p>
                    <span>R MARIA ANGÉLICA - <strong>Alterar</strong></span>
                    <span>ASTECA - SANTA LUZIA - MG</span>
                </TextEndereco>

                <form>
                    <div className='inputs'>
                        <label>
                            *Número
                            <input type='text' />
                        </label>
                        <label>
                            *Complemento
                            <input type='text' />
                        </label>
                    </div>
                    <label>
                        *Destinatário
                        <input type='text' />
                    </label>
                    <label>
                        Referência para entrega
                        <input type='text' />
                    </label>
                </form>


                <SelectFrete>
                    <div className='div1'>
                        <p>CORREIOS-SEDEX: R$ 9,53 - Até 2 dias úteis</p>
                        <input type='radio' name='frete'/>
                    </div>
                    <div>
                        <p>JADLOG PACKAGE: R$ 14,72 - Até 3 dias úteis</p>
                        <input type='radio' name='frete'/>
                    </div>
                </SelectFrete>
                <button onClick={props.CloseModal}>Continuar</button>
            </Main>
        </Container>
    )
}
export default DadosPessoais