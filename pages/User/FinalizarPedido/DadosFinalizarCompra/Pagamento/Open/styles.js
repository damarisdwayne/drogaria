import styled, { css } from 'styled-components'
import { CreditCard, Barcode } from '../../../../../../styles/Icons'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    color: #bbb;
    background-color: #fbfbfb;
    border: 2px solid #00a9d6;

    font-size: 14px;
    font-weight: 600;
    text-align: left;
    border-radius: 8px;
    padding: 10px;
`;
export const Header = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  padding: 10px 10px 0;
  
   h1 {
     font-size: 18px;
     color: #414141;
     margin-left: 10px;
   }
`;

export const CardIcon = styled(CreditCard)`
  width: 30px;
  height: 30px;
  color: red;

  fill: red;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 100%;

  div {
    display: flex;
    gap: 15px;
  }

  label {
    color: #3f3f3f;
    font-size: 14px;
  }
  .checkbox {
    display: flex;
    font-size: 13px;
    justify-content: flex-start;
    align-items: center;

    input {
      width: 5%;
      margin-right: 5px;
    }
  }

  input {
    border: 2px solid rgb(222, 222, 222);
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    color: #3f3f3f;
    background-color: #fff;
    margin: 10px 0;

    &.sucess {
      color: #79af5e;
      border: 2px solid #b9e0a5;
      background-color: rgba(114,189,76,.15);
    }
  }

  span {
    font-size: 12px;
    color: #3f3f3f;
  }
`;

const icon = css`
  width: 14px;
  height: 14px;
  margin-right: 5px ;

  cursor: pointer;

  fill: #7D7D7D;

`;


export const ContentSide = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   max-width: 180px;

   span {
     font-size: 14px;
     color: #3f3f3f;
     font-weight: normal;
   }

   div{
     display: flex;
     align-items: center;
     background-color: #dad8d8;
     color: #757575;
     padding: 10px;
     border-radius: 8px 0px 0px 8px;
     cursor: pointer;

     strong {
       font-size: 14px;
       width: 100%;
       flex-wrap: nowrap;
     }
    }

    .isSelected {
      color: #00a9d6;
      background-color: #ececec;
      
      svg{
        color: #00a9d6;
        fill: #00a9d6;
      }
    }
`;

export const CardsIcon = styled(CreditCard)`
  width: 42px;
  height: 30px;
  fill: #8c8c8c;
`;

export const CodigoIcon = styled(Barcode)`
 
 width: 42px;
  height: 30px;
  color: #fff;

  fill: #8c8c8c;
`;

export const ContentMain = styled.div`
   display: flex;
   flex-direction: column;
   background-color: #ececec;
   border-radius: 8px;
   width: 100%;
`;