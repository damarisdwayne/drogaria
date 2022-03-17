import styled from 'styled-components'

export const Container = styled.div`
    
`;

export const Header = styled.div`

`;

export const Main = styled.div`
    max-width: 1000px;
    min-height: 600px;
    margin: 0 auto;
    padding: 20px;

    > strong {
        margin-bottom: 30px;
    }

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 30px 0;

        .continuar {
            background-color: #d8d8d8;
            color: #797979;
            font-weight: 600;
            border-radius: 8px;
            padding: 10px 16px;
            font-size: 16px;
        }

        .concluir {
            background-color: #00a9d6;
            font-size: 16px;
            font-weight: 600;
            text-transform: uppercase;
            border-radius: 8px;
            padding: 10px 16px;
            color: #fff;
        }
    }
`;

export const Item = styled.div`
    margin-top: 30px;
`;

export const Footer = styled.div`

`;