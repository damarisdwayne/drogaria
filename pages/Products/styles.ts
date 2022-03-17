import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`;

export const Header = styled.nav`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 20px auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
    > ul {
        display: flex;
        justify-content: flex-start;
        padding: 10px 20px;

        > li {
            margin-right: 10px;
            a, span {

                text-decoration: none;
                color: #3F3F3F;
                ;
            }
        }
    }

    @media (min-width: 768px) {
        justify-content: flex-start;
        flex-direction: column;
    > ul {
        display: flex;
        gap: 15px;
        justify-content: flex-start;
        padding: 10px 20px;
        
    }
  }
`;

export const Title = styled.div`
    color: #3F3F3F;
    font-size: 16px;
    font-weight: 600;
    padding: 20px;
    align-self:center;

    @media (min-width: 768px) {
        padding: 0 20px;
        align-self: flex-start;
    }
`;


export const Main = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;

    h1 {
            font-size: 13px;
            color: #318BB8;
            text-transform:uppercase;
            font-weight: 700;
            margin-bottom: 20px;
    }

    @media(min-width: 768px) {
        flex-direction: row;
    }


`;

export const Filters = styled.div`
    padding: 15px;
    min-width: 230px;

    div {
        background-color: #f7f7f7;
        padding: 15px;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    li {
        margin-bottom: 8px;
        gap: 10px;
        > input {
            margin-right: 8px;
        }

        >span {
            font-size: 12px;
            color: #555555;
            text-transform: uppercase;
        }
    }
`;

export const ProductContent = styled.div`
    width: 100%;
    height: auto;
    
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 30px;
    padding: 20px;
    gap: 10px;

    > div {
        display: flex;
        max-width: 350px;
        min-width: 200px;
        gap: 10px;
        padding: 10px;
    }

    @media (min-width: 768px) {
        grid-template-columns: 50% 50%;

        > div {
            flex-direction: column;
        }
    }

    @media (min-width: 1100px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 1280px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;

export const ImageProduct = styled.div`
    width: 100%;
    height: 170px;
    background-color: #ccc;
    margin: 0 auto;
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    gap: 10px;

    button {
        width: 146px;
        height: 43px;
        color: #FFFFFF;
        background-color: #328CB8;
        text-transform: uppercase;
        text-align: center;
        border-radius: 8px;
    }

    span {
        font-size: 12px;
    }
`;

export const OldPrice = styled.div`
    color: #888888;
    font-size: 14px;
    text-decoration: line-through;
`;

export const Price = styled.p`
    font-size: 24px;
    color: #465A65;
`;
