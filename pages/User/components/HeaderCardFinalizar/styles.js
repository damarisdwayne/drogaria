import styled from 'styled-components'
import { User, Pencil, Truck, CreditCard } from '../../../../styles/Icons'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  span{
    display: flex;
    align-items: center;
    h1 {
      font-size: 14px;
    }

    p {
      font-size: 12px;
      color: #318cb8;
      font-weight: bold;
    }
  }

  .editar {
    cursor: pointer;
  }
`;
export const UserIcon = styled(User)`
    width: 23px;
    height: 26px;
    margin-right: 5px ;

    cursor: pointer;

    fill: #bbbbbb;
`;

export const TruckIcon = styled(Truck)`
    width: 23px;
    height: 26px;
    margin-right: 7px;

    cursor: pointer;

    fill: #bbbbbb;
`;

export const CardIcon = styled(CreditCard)`
    width: 23px;
    height: 26px;
    margin-right: 7px;

    cursor: pointer;

    fill: #bbbbbb;
`;

export const PenIcon = styled(Pencil)`
    width: 18px;
    height: 18px;
    margin-right: 1px ;

    cursor: pointer;

    fill: #318cb8;
    color: #318cb8;
`;