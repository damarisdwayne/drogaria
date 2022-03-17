import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 5px;

    p {
        width: 13px;
        height: 13px;
        border: 1px solid black;
        margin-right: 5px;
        cursor: pointer;
    }

    .checkbox.checked {
        background-color: #000;
    }
`;