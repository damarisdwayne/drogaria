import PagarComCartao from './PagarComCartao'
import PagarComBoleto from './PagarComBoleto'
import {
    Container,
    Header,
    CardIcon,
    Main,
    ContentSide,
    CardsIcon,
    CodigoIcon,
    ContentMain
} from './styles'
import { useState } from 'react'

const DadosPessoais = (props) => {

    const [pagarComCartao, setPagarComCartao] = useState(true)

    let cartao, boleto    

    if (pagarComCartao) cartao = 'isSelected'
    else boleto = 'isSelected'

    return (
        <Container>
            <Header>
                <CardIcon />
                <h1>Pagamento</h1>
            </Header>

            <Main>
                <ContentSide>
                    <span>Adicionar Vale Presente</span>
                    <div className={cartao} onClick={() => setPagarComCartao(true)}>
                        <CardsIcon />
                        <strong>Cartão de Crédito</strong>
                    </div>
                    <div className={boleto} onClick={() => setPagarComCartao(false)}>
                        <CodigoIcon />
                        <strong>Boleto Bancário</strong>
                    </div>
                </ContentSide>
                <ContentMain>
                    {pagarComCartao ? <PagarComCartao OpenModal={props.CloseModal} className={cartao} /> : <PagarComBoleto className={boleto} />}


                </ContentMain>
            </Main>
        </Container>
    )
}
export default DadosPessoais