import styled, { css } from 'styled-components'
import { Truck } from '../../../../../../styles/Icons'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    color: #bbb;
    background-color: #fbfbfb;
    border: 2px solid #00a9d6;

    font-size: 14px;
    font-weight: 600;
    width: 100%;
    min-width: 290px;
    text-align: left;
    border-radius: 8px;
    padding: 10px;
`;
export const Header = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  
   h1 {
     font-size: 18px;
     color: #414141;
   }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

   form {
     width: 100%;
   }

  .inputCep {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    width: 100%;

    input {
      width: 50%;
    }
  }

  .inputs {
      width: 100%;
      display: flex;
      gap: 15px;

      label {
        width: 100%;
      }
    }

  label {
    color: #3f3f3f;
    font-size: 14px;

    input {
    border: 2px solid rgb(222, 222, 222);
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    color: #3f3f3f;
    margin: 10px 0;
    }
  }

  button {
    align-self: flex-end;
    text-transform: uppercase;
    color: #FFF;
    background-color: #00a9d6;
    border-radius: 8px;
    font-size: 13px;
    padding: 8px 12px;
    font-weight: 600;
    margin-top: 10px;
  }
`;

export const TextEndereco = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    > p {
      font-size: 12px;
      color: #3f3f3f;
      font-weight: normal;
      margin-bottom: 8px;
    }

    > span {
      font-size: 12px;
      font-weight: normal;
      color: #9e9e9e;
      margin-bottom: 5px;

      strong {
        font-weight: normal;
        color: #3f3f3f;
      }
    }
`;

export const SelectFrete = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 0 5px;
    border: 2px solid #ececec;
    border-radius: 8px;
    
    p{
      color: #3f3f3f;
      font-size: 12px;
      line-height: 14px;
      padding: 10px 30px 10px 3px;
      font-weight: normal;
    }

    input {
      margin-right: 5px;
    }
  }
`;

const icon = css`
  width: 14px;
  height: 14px;
  margin-right: 5px ;

  cursor: pointer;

  fill: #7D7D7D;

`;

export const TruckIcon = styled(Truck)`
    width: 30px;
    height: 27px;
    margin-right: 5px ;

    cursor: pointer;

    fill: red;
`;