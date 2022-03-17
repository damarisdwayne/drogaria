import styled, { css } from 'styled-components'

import { User, Menu, ShoppingBasket, TelephoneInbound } from "../../../styles/Icons"

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 15px 20px;

    .logo {
       flex: 2;
       display: flex;
       justify-content: space-between;
       align-items: center;
       width: 100%;

       h1 {
        flex: 1 1 60px;
        margin-right: 60px;
        text-align: center;
       }
    }

    @media (max-width: 824px){
        align-items: flex-start;
        .logo{
            flex: 10;
            flex-direction: column;
            justify-content: space-between;

            h1 {
                margin: 0;
            }
        }
    }
        
`;

export const InputWrapper = styled.div`
    display: flex;
    flex: 1 1 auto;
    width: 100%;
    justify-content: center;
`;

export const Input = styled.input`
    flex: 1 1 auto;
    width: 100%;
    height: 48px;
    padding: 10px 50px 12px 18px;
    border: 2px solid #e6e6e6;
    border-radius: 8px 0 0 8px;
    background-color: #FFFFFF;
    color: #555;
`;

export const ButtonInput = styled.button`
    width: auto;
    height: 48px;
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    margin-right: 10px;
    border: 0;
    background: #328cb8;
    text-align: center;
    text-transform: uppercase;
    border-radius: 0 8px 8px 0;
    padding: 10px 20px;

    @media (max-width: 824px){
        margin-right: 0;
    }
`;

export const InfoServiceUser = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
    width: 100%;

    
    div {
        padding: 0;
        position: relative;
        margin-left: 10px;
        display: flex;
        font-size: 14px;
        align-items: center;
        cursor: pointer;
        color: #9e9e9e;
       
        
        .price {
            color: #388CB7;
        }      
        
        span {
            display: block;
            width: 100%;
        }
        
        p {
            background-color: #388CB7;
            color: #fff;
            font-size: 12px;
            font-weight: 600;
            line-height: 17px;
            height: 16px;
            width: 16px;
            border-radius: 50%;
            text-align: center;
            align-self: center;
            position: absolute;
            bottom: 3px;
            left: -9px;
        }
    }

    @media (max-width: 1140px){
        .central {
            display: none;
        }
        .cesta {
            margin-left: 30px;
        }
     }

     @media (max-width: 915px){        
        .cesta {
            span{
                display: none;
            }
        }
    }

     @media (max-width: 824px){    
         flex: 0.5;
        .pedidos {
            display: none;
        }
    }
`;

const iconMdCSS = css`
    width: 30.66px;
    height: 30px;

    cursor: pointer;

    fill: #7D7D7D;

`;

export const UserIcon = styled(User)`
  ${iconMdCSS}
`;


export const MenuIcon = styled(Menu)`
  ${iconMdCSS}
  flex: 1;
  align-self: stretch;
  @media (min-width: 824px){
      display: none;
      width: 100%;
  }
`;

export const BasketIcon = styled(ShoppingBasket)`
  ${iconMdCSS}
`;

export const ContactIcon = styled(TelephoneInbound)`
  ${iconMdCSS}
`;