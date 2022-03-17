import styled from 'styled-components'
import { Trash } from '../../../../styles/Icons'

export  const Container = styled.div`
    display: flex;
    padding: 20px;
    border-bottom: 2px solid #ececec;    
`;

export  const ImageWrapper = styled.div`
    width: 65px;
    height: 65px;
    margin-right: 10px;

`;

export  const ImageProduct = styled.img`
    width: 100%;
    height: 100%;
`;

export  const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    h3 {
        font-size: 14px;
        font-weight: normal;
        color: #727272;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        > span{
            display: flex;
            align-items: center;

            > strong {
                display: inline-block;
                margin-right: 20px;
                font-size: 16px;
                font-weight: 600;
                color: #465a65;
            }

            .btn-quantity {
                display: flex;
                align-items: center;
                max-width: 70px;
                height: 35px;
                gap: 8px;
                padding: 0 13px;

                border-radius: 8px;
                border: 2px solid #ececec;

                background-color: #fff;

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
        }
    }
`;

export const IconDelete = styled(Trash)`
  width: 18px;
  height: 18px;
  margin-right: 5px ;

  cursor: pointer;

  color: red;
`;