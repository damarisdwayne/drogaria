import styled, {css} from 'styled-components';
import {ShoppingBasket} from '../../../styles/Icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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
export const Main = styled.form`
  display: flex;
  justify-content: center;
  color: #3d3d3d;

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

export const BasketIcon = styled(ShoppingBasket)`
  width: 18px;
  height: 18px;
  margin-right: 5px ;

  cursor: pointer;

  color: #328cb8;
`;