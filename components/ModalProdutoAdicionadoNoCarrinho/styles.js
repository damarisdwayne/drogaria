import styled from 'styled-components'

export const Container = styled.div`
    border-radius: 8px;
    z-index: 10;
    position: fixed;
    top: -100%;
    left: 0;
    right: 0;
    bottom: 100%;
    width: 590px;
    height: 100%;
    margin: 0 auto;

    transition: 0.5s transform cubic-bezier(0.5, 0, 0, 1);
    transform: translateY(102%);

    &.open {
        transform: translateY(0);
    }
        
  > div{
    background: #FFFFFF;
    height: 170px;
    width: 100%;
    border-radius: 8px;
    > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        border: 1px solid #d4d4d4;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 8px;
        height: 100%;

        h1 {
            color: #318cb8;
            text-align: center;
            width: 400px;
            margin: 0 auto;
            font-size: 18px;
            font-weight: 600;
        }

        p {
            font-size: 14px;
            color: #7b7b7b;
            text-align: center;
            margin: 10px 0 20px;
        }


        .continuar {
            color: #ffffff!important;
            background-color: #d8d8d8;
            border-radius: 8px 0 0 8px;
            width: 49%;
            text-align: center;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            box-sizing: border-box;
            padding: 15px 10px;
        }

        .finalizar {
            color: #ffffff;
            background-color: #328cb8;
            margin-left: -1px;
            border-radius: 0 8px 8px 0;
            width: 49%;
            text-align: center;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            box-sizing: border-box;
            padding: 15px 10px;
        }

        .close {
            color: #c3c3c3;
            font-size: 20px;
            cursor: pointer;
        }

        span {
            display: flex;
            align-items: center;
        }
    }
}
`;
