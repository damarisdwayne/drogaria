import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 700px;

    span {
        display: flex;
        justify-content: space-between;
        

        button {
            background: #d8d8d8;
            border: 1px solid #d8d8d8;
            font-size: 14px;
            font-weight: 600;
            color: #797979;
            padding: 10px 12px;
            outline: none;
            text-transform: uppercase;
            border-radius: 8px;
        }
        
    }
    
    div {
        align-items: center;
        justify-content: center;
        margin-top: 200px;

        h2 {
            text-align: center;
            font-size: 22px;
            font-weight: 600;
            color: #3f3f3f;
        }

        input {
            color: #454545;
            
            border: 2px solid #dedede;
            border-radius: 5px;
            width: 100%;
            height: 55px;
            margin: 20px 0;
        }

        p {
            text-align: center;
            font-size: 14px;
            font-weight: 300;
            color: #989898;

            margin-bottom: 20px;
        }
    }
`;
