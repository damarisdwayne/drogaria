import styled from 'styled-components'

export const Container = styled.div`
    background-color: #f7f7f7;
    border-radius: 8px;
    padding: 20px 20px 15px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    span{
        display: flex;

        > h1 {
            font-size: 20px;
            font-weight: normal;
            margin-right: 10px;
        }
    } 
    
    button {
        padding: 10px;
        background-color: #949494;
        border-radius: 8px;
        color: #fff;
    }
`;

export const Main = styled.div`
    
`;