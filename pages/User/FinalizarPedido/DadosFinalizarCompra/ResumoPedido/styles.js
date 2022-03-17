import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    width: 100%;
`;

export const Header = styled.div`
    margin-bottom: 30px;

    h1 {
        font-size: 16px;
        padding: 10px;
        text-align: center;
        border-bottom: 1px solid #d6d6d6;
    }
`;
export const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    li {
        display: flex;
        list-style: none;
        padding: 10px 0;
        position: relative;

        > span {
            background-color: #e30015;
            color: #fff;
            position: absolute;
            left: 3px;
            top: 5px;
            font-size: 12px;
            line-height: 20px;
            width: 20px;
            height: 20px;
            text-align: center;
            border-radius: 50%;
        }

        .imgProduct {
            width: 60px;
            height: 60px;
            background-color: #ddd;
        }

        .contentProduct{
            padding: 0 0 10px 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            
            > h2 {
                font-size: 14px;
                color: #727272;
                font-weight: normal;
            }

            > span {
                font-size: 14px;
                color: #9c9c9c;
                align-self: flex-end;
            
            }
        }
    }

    button {
        align-self: flex-end;
        background: #d8d8d8;
        width: 202.8px;
        border: 1px solid #d8d8d8;
        font-size: 14px;
        font-weight: 600;
        color: #797979;
        padding: 10px 12px;
        outline: none;
        text-transform: uppercase;
        border-radius: 8px;
        margin-top: 10px;
    }

    .subtotal {
        align-self: flex-end;
        display: flex;
        flex-direction: column;
        margin-top: 10px;

        > div {
            display: flex;

            strong, span {
                font-size: 12px;
                color: #414141;
                padding: 5px 6px;
            }

            span {
                align-self: flex-end;
            }
            .preco {
                font-size: 18px;
                color: #465A65;
                font-weight: bold;
            }
        }
    }
`;