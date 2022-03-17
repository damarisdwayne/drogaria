import styled, { css } from 'styled-components';
import { ShoppingBasket, Trash, CreditCard } from '../../../styles/Icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 32px;
  min-height: 61px;
  background-color: #f7f7f7;
  > h1 {
    display: flex;
    align-items: center;
    > span {
      color: #328cb8;
      margin-left: 10px;
      font-size: 18px;
    }
  }
  > button {
    background: none;
    border: none;
    font-weight: bold;
    font-size: 17px;
    outline: 0;
    cursor: pointer;
  }
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #3d3d3d;
  height: 100%;
  width: 100%;
  overflow: auto;

  .content {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .face {
    padding: 20px;
    font-size: 120px
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 5px;

    span{
      font-size: 18px;
    }

    strong {
      font-size: 30px
    }
  }
`;


export const Product = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  overflow: auto;
  
`;

export const InfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > span {
    display: flex;
    justify-content: space-between;
  }
`;

export const ImageProduct = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ddd;
  `;

export const ImageWrapper = styled.div`
  width: 140px;
  height: 80px;
  margin-right: 10px;
`;

export const PaymentInfo = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    padding: 0 10px;

    p {
    text-align: center;
    padding: 5px;
    font-size: 14px;
    color: #3f3f3f;
    }
  }
`;

export const InputWrapper = styled.form`
    display: flex;
    align-items: center;
    margin: 10px 0;
    padding: 0 8px;
`;

export const Total = styled.div`
    background-color: #eee;
    padding: 0 15px;
    
    div {
    > div{
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      

      > span, strong {
        padding: 15px;
        color: #3f3f3f;
        font-size: 14px;
      }
    }
  }
`;

export const Input = styled.input`
    max-width: 300px;
    min-width: 260px;
    height: 40px;
    padding: 10px 50px 12px 18px;
    border: 2px solid #e6e6e6;
    border-radius: 8px;
    color: #555;
    margin-right: 10px;
`;

export const ButtonInput = styled.button`
    width: 116px;
    padding: 10px;
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    margin: 0;
    border: 0;
    background: #328cb8;
    text-align: center;
    text-transform: uppercase;
    border-radius: 8px;
`;

export const ButtonFinalizaBuy = styled.button`
  padding: 15px 0;
  background-color: #328cb8;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
`;

export const IconDelete = styled(Trash)`
  width: 18px;
  height: 18px;
  margin-right: 5px ;

  cursor: pointer;

  color: red;
`;

export const BasketIcon = styled(ShoppingBasket)`
  width: 18px;
  height: 18px;
  margin-right: 5px ;

  cursor: pointer;

  color: #328cb8;
`;

export const CardIcon = styled(CreditCard)`
  width: 26px;
  height: 26px;
  margin-right: 8px ;

  cursor: pointer;

  color: #328cb8;
`;