import {Container} from './styles'

const PagarComCartao = (props) => {
    return (
        <Container>
            <label>
                *Número do Cartão
                <input type='text' />
            </label>
            <label>
                *Número de parcelas
                <input type='text' />
            </label>
            <label>
                *Nome impresso no cartão
                <input type='text' />
            </label>
            <label>
                *Data de Validade
                <div>
                    <input type='text' />
                    <input type='text' />
                </div>
            </label>
            <label>
                *Código de segurança
                <input type='text' />
            </label>
            <label>
                *CPF do Titular
                <input type='text' />
            </label>
            <label className='checkbox'>
                <input type='checkbox' />
                O endereço da fatura do cartão é o mesmo da entrega
            </label>

            <button onClick={props.CloseModal}>Utilizar dois cartões</button>
        </Container>
    )
}

export default PagarComCartao