import styled from 'styled-components'

export const Container = styled.div`
    justify-content: space-between;
    margin: 0 auto 30px auto;
    width: 100%;
    height: auto;
    gap: 10px;
    cursor: pointer;
`;

export const ProductInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    .btn-quantity{
        visibility: hidden;
        display: flex;
        align-items: center;
        height: 43px;
        gap: 8px;
        padding: 0 13px;

        border-radius: 8px;

        background-color: #F5F5F5;

        p {
            color: #3f3f3f;
        }

        button {
            color: #555555;
        }

        button, p{
            display: inline-block;
            font-size: 16px;
            font-weight: 900;
        }
    }

    .btn-comprar {
        visibility: hidden;
        width: 200px;
        height: 43px;
        color: #FFFFFF;
        background-color: #328CB8;
        text-transform: uppercase;
        text-align: center;
        border-radius: 8px;
    }

    &:hover {
        border: 2px solid #f1f1f1;
        border-radius: 8px;

        .btn-comprar {
            visibility: visible;
        }
        
        .btn-quantity{
            visibility: visible;
        }
    }

    @media(max-width: 600px) {
        flex-direction: row;
        align-items:start;

        .btn-comprar {
            visibility: visible;
        }

        .btn-quantity{
            visibility: visible;
        }
    }

`;

export const Price = styled.div`
    font-size: 24px;
    color: #465A65;
`;

export const OldPrice = styled.div`
    color: #888888;
    font-size: 14px;
    text-decoration: line-through;
`;

export const ProcuctImage = styled.img`
    width: 100%;
    height: 200px;
    background-color: #ddd;
    @media(max-width: 600px) {
        width: 50%;
    }
`;

export const ProductContent = styled.span`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    justify-content: center;
    width: 100%;

    margin-top: 8px;
    gap: 8px;
    p{
        color: #727272;
        justify-content: flex-start;
    }

    .input {
    display: flex;
    }

    .btns {
        margin-top: 25px;
        width: 100%;
        justify-content: flex-start;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media(max-width: 600px) {
        align-content: flex-start;
    }
`;