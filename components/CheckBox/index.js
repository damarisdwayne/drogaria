import { useState } from "react"
import { useSelector } from 'react-redux';

import { Container } from './styles'

const Checkbox = (props) => {
    const [checked, setChecked] = useState(false)

    const Toggle = () => {
        setChecked(!checked)
       

        if(checked) {
            props.products(props.text, true);
            return;
        }

        props.products(props.text, false);
    }

    const checkedClass = checked ? 'checked' : ''
    const containerClass = `checkbox ${checkedClass}`.trim()

    return (
        <Container>
            <p className={containerClass} onClick={Toggle} />
            <span>{props.text}</span>
        </Container>
    )
}

export default Checkbox