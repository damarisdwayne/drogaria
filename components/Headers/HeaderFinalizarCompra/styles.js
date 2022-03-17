import styled from 'styled-components'
import {Lock} from '../../../styles/Icons'

export const Container = styled.div`
    
    background-color: #f7f7f7f7;
    min-height: 85px;
`;


export const Main = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    padding: 20px 15px;
    margin: 0 auto;

    div {
        display: flex;
    }
    
    span {
        color: #318cb8;
        font-size: 15px;
    }
    
    `;

export const LockIcon = styled(Lock)`    
    height: 35px;
    width: 35px;
    color: #318cb8;

    margin-right: 3px;
`;