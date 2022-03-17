import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-height: 500px;
    height: 100%;
    margin: 0 auto;

    > h1 {
        margin-bottom: 30px;
        font-size: 24px;
    }
;`

export const Main = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px;

    .col {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        margin-right: 30px;
        gap: 30px;

        .row {
            display: flex;
            gap: 30px;
        }

        .card-dados {
            
        }

        .card-entrega {
            width: auto;
        }

        .card-pagamento {
            align-self: flex-start;
        }
    }

    @media(max-width: 1000px) {
        flex-direction: column;

        .row {
            flex-direction: column;
            width: 100%;
        }

        .card-dados, .card-entrega {
            margin-bottom: 30px;
        }

        .card-pagamento {
            width: 100%;
        }
    }
`;

