import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 20px 0 20px 20px;
    max-width: 1280px;

    @media(max-width: 780px) {
        flex-direction: column;
    }
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 20px 20px;
    max-width: 1280px;
    width: 100%;

    div {
        color: #3f3f3f;

        > p {
            font-size: 14px;
            margin-bottom: 12px;
            padding: 0 8px;
        }

        >label {
            font-size: 14 px;

            >input {
                margin-left: 8px;
            }

            > strong {
                margin-left: 8px;
            }
        }
    }
    

    h1 {
        text-align: center;
        font-size: 22px;
        margin: 10px 0;
    }

    form {
        width: 100%;

        label {
            padding: 10px;
            display: flex;
            flex-direction: column;

            span {
                font-size: 11px;
                color: #a6a4a4;
                margin-left: 5px;
            }

            .input {
                border: 2px solid rgb(222, 222, 222);
                width: 100%;
                padding: 10px;
                border-radius: 8px;
                color: #3f3f3f;
                margin: 10px 0;
            }

            .inputTel {
                border: 2px solid rgb(222, 222, 222);
                width: 50%;
                padding: 10px;
                border-radius: 8px;
                color: #3f3f3f;
                margin: 10px;
            }

            .inputCheck {
                margin-top: 15px;
            }
        }
    }

    button {
        align-self: flex-end;
        background-color: #7bc157;
        color: #fff;
        padding: 10px 15px;
        border-radius: 5px;
        margin-top: 20px;
    }
`;

export const HorizontalLine = styled.div`
    flex-grow: 1;
    height: 1px;
    border-bottom: 1px solid #d6d6d6;
    margin: 10px 8px 30px;
`;

