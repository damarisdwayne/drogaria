import styled, { css } from 'styled-components';

import { Facebook, Instagram, Twitter, Whatsapp, TelephoneFill } from "../../../styles/Icons"

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1280px;
    width: 100%;
    margin: 10px auto;
    padding: 10px;

    @media (max-width: 824px){
        display: none;
    }

    @media (max-width: 824px){
        
        justify-content: center;
        
        .pedidos {
            display: none;
        }
     }
`;

export const InfoUserAccount = styled.div`
    display: flex;
    gap: 10px;
    
    & + a::before{
            content: "|";
            color: black;
            margin-left: 10px;
        }

        span{
        text-decoration: none;
        color: #7D7D7D;
        text-align: center;
        margin-left: 10px;

        &:hover{
            text-decoration: underline;
        }
    }

    
`;

export const InfoContactDrugstore = styled.div`
    display: flex;
    gap: 15px;

    a, span{
        text-decoration: none;
        color: #7D7D7D;

        &:hover {
            text-decoration:underline;
        }
    }
`;

export const Contact = styled.div`
    display: flex;
    gap: 20px;

    &::after{
        content: "|";
        color: black;
        margin:0 10px;
    }

    a{
        text-decoration: none;
        color: #7D7D7D;
        align-self: center;
    }
`;

export const SocialMedia = styled.div`
    display: flex;
    gap: 20px;

    a{
        text-decoration: none;
        color: #7D7D7D;
    }
`;

const iconSmallCSS = css`
  width: 14px;
  height: 14px;
  margin-right: 5px ;

  cursor: pointer;

  fill: #7D7D7D;

`;

export const InstagramIcon = styled(Instagram)`
  ${iconSmallCSS}
`;

export const TwitterIcon = styled(Twitter)`
  ${iconSmallCSS}
`;

export const WhatsappIcon = styled(Whatsapp)`
  ${iconSmallCSS}
`;

export const FacebookIcon = styled(Facebook)`
  width: 16px;
  height: 16px;
  margin-right: 5px ;

  cursor: pointer;

  fill: #7D7D7D;
`;

export const TelIcon = styled(TelephoneFill)`
  ${iconSmallCSS}
`;




