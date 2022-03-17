import { useState } from 'react'
import { Container, Main, Form } from './styles'

const ModalAvaliacaoClose = () => {

    const [select, setSelect] = useState('default');

    function handleChange(event) {
        setSelect(event.target.value);
    }

    return (
        <Container>
            <Main>
                <h4>*Avaliação</h4>
                <Form>
                    <label className='input-radio'>
                        Recomenda este produto?
                        <div>
                            <input type='radio' name='recomenda' />
                            <p>Sim</p>
                            <input type='radio' name='recomenda' />
                            <p>Não</p>
                        </div>
                    </label>
                    <label>
                        Título da avaliação
                        <input type='text' />
                    </label>
                    <label>
                        *Qual a sua opinião
                        <textarea />
                    </label>
                    <label>
                        Comprou quando
                        <select value={select} onChange={handleChange}>
                            <option value="default">--------</option>
                            <option value="uma-semana">1 semana</option>
                            <option value="um-mes">1 mês</option>
                            <option value="tres-meses">3 meses</option>
                            <option value="seis-meses">6 meses</option>
                            <option value="um-ano">1 ano ou mais</option>
                        </select>
                    </label>
                    <label className='input-radio'>
                        Recomendaria o site para um amigo?
                        <div>
                            <input type='radio' name='recomenda' />
                            <p>Sim</p>
                            <input type='radio' name='recomenda' />
                            <p>Não</p>
                        </div>
                    </label>
                    <label>
                        Por que?
                        <textarea />
                    </label>

                    <div className='buttons'>
                        <button className='cancelar'>cancelar</button>
                        <button className='publicar'>publicar comentário</button>
                    </div>
                </Form>
            </Main>
        </Container>
    )
}

export default ModalAvaliacaoClose