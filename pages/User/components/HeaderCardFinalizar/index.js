import { Container, UserIcon, TruckIcon, CardIcon, PenIcon } from './styles'

const HeaderCardFinalizar = (props) => {
    return (
        <Container>
            <span>
                {props.name === 'Dados Pessoais' && <UserIcon />}
                {props.name === 'Entrega' && <TruckIcon />}
                {props.name === 'Pagamento' && <CardIcon />}
                
                <h1>{props.name}</h1>
            </span>

            <span className='editar' onClick={props.OpenModal}>
                <PenIcon />
                <p>Editar</p>
            </span>
        </Container>
    )
}

export default HeaderCardFinalizar