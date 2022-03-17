import styled from 'styled-components'

export const Container = styled.div`
    
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 700px;
    margin: 0 auto;

    h4 {
        font-size: 14px;
        color: #3f3f3f;
        margin: 15px 0 30px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    label {
        display: flex;
        flex-direction: column;
        font-weight: bold;
        font-size: 14px;
        color: #3f3f3f;
        gap: 10px;
        margin-bottom: 20px;

        input, select {
            width: 100%;
            padding: 10px;
            z-index: 100;
            color: #3f3f3f;
            border: 2px solid #dedede;
            background: #ffffff;
            border-radius: 8px;
        }

        textarea {
            width: 100%;
            height: 110px;        
            padding: 10px;
            z-index: 100;
            color: #3f3f3f;
            border: 2px solid #dedede;
            background: #ffffff;
            border-radius: 8px;
            resize: none;
        }
    }

    .input-radio {
        div {
            display: flex;
            gap: 10px;
            background-color: #fff;
            padding: 6px;

            input {
                width: 3%;
            }
        }
    }

    .buttons {
        align-self: flex-end;

        button {
            color: #ffffff;
            font-size: 12px;
            border: 1px solid transparent;
            padding: 10px 15px;
            font-weight: 600;
            cursor: pointer;
            height: auto;
            line-height: normal;
            border-radius: 5px;
            margin-left: 8px;
            margin-bottom: 15px;
        }
        .cancelar {
            background-color: #328cb8;
        }
        .publicar {
            background-color: #7bc157;;
        }
    }

`;