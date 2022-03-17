import styled from 'styled-components'

import { ShoppingBasket, ArrowRight, X } from '../../../styles/Icons'

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 15px;
  min-height: 61px;
  background-color: #f7f7f7;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    > p {
      display: flex;
      align-items: center;
      > span  {
      color: #328cb8;
      margin-left: 10px;
      font-size: 18px;
      }
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

export const BasketIcon = styled(ShoppingBasket)`
  width: 20px;
  height: 20px;
  margin-right: 2px ;

  cursor: pointer;

  color: #328cb8;
`;

export const ArrowIcon = styled(ArrowRight)`
  width: 30px;
  height: 30px;
  margin-right: 5px ;

  cursor: pointer;

  color: #328cb8;
`;

export const CloseIcon = styled(X)`
  width: 30px;
  height: 30px;
  margin-right: 5px ;

  cursor: pointer;

  color: #000;
`;