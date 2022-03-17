import styled from 'styled-components';
import { User } from '../../../styles/Icons'

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
  background-color: #328cb8;
  > h1 {
    display: flex;
    align-items: center;
    > span {
      color: #FFFFFF;
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
    color: #FFFFFF;
  }
`;
export const Main = styled.form`
  display: flex;
  justify-content: flex-start;
  
  ul {
    width: 100%;
    background-color: #F7F7F7;

    li{
      margin: 0 20px;
      border-bottom: 1px solid #dcdcdc;
      padding: 15px;      
    }
    a {
      color: #555555;
      font-weight: 600;
      font-size: 13px;
      text-decoration: none;
      text-transform: uppercase;
      
      
      margin: 0 10px;
    }
  }

`;

export const UserIcon = styled(User)`
  width: 30px;
  height: 30px;
  margin-right: 5px ;

  cursor: pointer;

  color: #FFFFFF;
`;