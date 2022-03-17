import { useState } from 'react'
import ReactStars from 'react-rating-stars-component';

import ModalReviewClose from './Close'
import ModalReviewOpen from './Open'
import { Container, Header, Main } from './styles'

const ModalAvaliacaoClose = () => {

    const [modalOpen, setModalOpen] = useState(false)

    return (
        <Container>
            <Header>
                <span>
                    <h1>Avaliação dos clientes</h1>
                    <ReactStars count={5} value={0} edit={false} isHalf activeColor="#e7711c" />
                </span>
                <button onClick={() => setModalOpen(true)}>Faça sua avaliação</button>
            </Header>
            <Main>
                {modalOpen ? <ModalReviewOpen /> : <ModalReviewClose setState={setModalOpen} />}
            </Main>
        </Container>
    )
}

export default ModalAvaliacaoClose