import styled, { css } from 'styled-components'
import { Truck, Pencil } from '../../../../../../styles/Icons'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    color: #bbb;
    background-color: #fbfbfb;

    font-size: 14px;
    font-weight: 600;
    width: 100%;
    min-width: 290px;
    text-align: left;
    border: 2px solid #e2e2e2;
    border-radius: 8px;
    padding: 10px;
    height: auto;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  span{
    display: flex;
    align-items: center;
    h1 {
      font-size: 14px;
    }

    p {
      font-size: 12px;
      color: #318cb8;
    }
  }
`;
export const Main = styled.div`

 p {
    font-size: 12px;
    margin-bottom: 3px;
    font-weight: normal;
  }
`;

const icon = css`
  width: 14px;
  height: 14px;
  margin-right: 5px ;

  cursor: pointer;

  fill: #7D7D7D;

`;

export const PenIcon = styled(Pencil)`
    width: 18px;
    height: 18px;
    margin-right: 2px ;

    cursor: pointer;

    fill: #318cb8;
`;

export const TruckIcon = styled(Truck)`
    width: 23px;
    height: 26px;
    margin-right: 7px;

    cursor: pointer;

    fill: #bbbbbb;
`;