import { Container } from './styles'

const ModalReviewClose = ({setState}) => {
    return (
        <Container onClick={setState}>
                <span>Escrever a primeira avaliação</span>
        </Container>
    )
}

export default ModalReviewClose