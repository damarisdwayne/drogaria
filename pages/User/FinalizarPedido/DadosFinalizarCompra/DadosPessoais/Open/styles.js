import styled, { css } from 'styled-components'
import { User } from '../../../../../../styles/Icons'

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

  p {
    line-height: 18px;
    font-size: 12px;
    color: #9e9e9e;
    font-weight: normal;
    margin-bottom: 15px;
  }

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
    margin-left: 180px;
  }
`;

const icon = css`
  width: 14px;
  height: 14px;
  margin-right: 5px ;

  cursor: pointer;

  fill: #7D7D7D;

`;

export const UserIcon = styled(User)`
    width: 30px;
    height: 27px;
    margin-right: 5px ;

    cursor: pointer;

    fill: red;
`;