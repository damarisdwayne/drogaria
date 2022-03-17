import styled, { css } from 'styled-components'
import { Facebook, Twitter, Whatsapp, ShieldShaded, Storefront, Airplane, EmojiSmile, CreditCard, Email, TelephoneInbound } from "../../styles/Icons"

export const Container = styled.div`
    background-color: #388CB7;
    width: 100%;
    height: auto;
    color: #FFFFFF;
`;

export const Wrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    
    > p{
        font-size: 11px;
        line-height: 21px;
        color: #fff;
        text-align: justify;
        padding: 30px 30px;
    }
`;

export const FooterListInfo = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 45px 20px;

    @media (max-width: 824px){
        flex-direction: column;
        .institucional{
            display: none;
        }
    }
    
`;

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    > li {
        color: #FFFFFF99;
        font-size: 13px;
    }

    .title {
        color: #FFFFFF;
        font-weight: bold;
        font-size: 16px;
    }

    @media (max-width: 824px){
        margin-bottom: 30px;
    }
`;

export const CardSecurity = styled.div`

`;

export const HorizontalLine = styled.div`
    height: 1px;
    border: 0.5px solid #B9B9B9;
    opacity: 0.2;
    width: 100%;

    @media (max-width: 1050px){
        display: none;
    }
`;

export const FooterBenefits = styled.div`
    @media (max-width: 1050px){
        display: none;
    }
`;

export const Benefits = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 2%;
    
    padding: 45px 30px;
    width: 100%;
    align-items: center;

    > div {
        display: flex;
        align-items: center;

        > span {
            white-space: nowrap;
            font-size: 14px;
            font-weight: 300;

            > strong {
            font-size: 16px;
            }
        }
    }
`;

export const FooterMenu = styled.ul`
    display: flex;
    justify-content: center;
    gap: 40px;
    font-size: 13px;
    padding: 15px 0;

    @media (max-width: 1050px){
        display: none;
    }
`;

export const CreatorCredits  = styled.footer`
    width: 100%;
    height: 60px;
`;

export const SocialMedias = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
    > div{
        color: black;
    }
`;
    
const iconSmallCSS = css`
    width: 18px;
    height: 18px;
    
    cursor: pointer;
    
    fill: #B9B9B9;
`;

const iconSmallCSSWhite = css`
    width: 16px;
    height: 16px;
    
    cursor: pointer;
    
    fill: #FFFFFF;

    margin-right: 8px;
`;

const iconMdCSS = css`
    width: 33px;
    height: 33px;
    
    cursor: pointer;
    
    fill: #FFFFFF;

    margin-right: 8px;
`;

export const CIcon  = styled.div``;

export const OIcon = styled.div``;


export const WhatsappIcon = styled(Whatsapp)`${iconSmallCSSWhite}`;

export const TelIcon = styled(TelephoneInbound)`${iconSmallCSSWhite}`;

export const EmailIcon = styled(Email)`${iconSmallCSSWhite}`;

export const LojaIcon = styled(Storefront)`${iconSmallCSSWhite}`; 

export const SmileIcon = styled(EmojiSmile)`${iconMdCSS}`;

export const StoreIcon = styled(Storefront)`${iconMdCSS}`;

export const AirplaneIcon = styled(Airplane)`${iconMdCSS}`;

export const CardIcon = styled(CreditCard)`${iconMdCSS}`;

export const ShieldIcon = styled(ShieldShaded)`${iconMdCSS}`;

export const FacebookIcon = styled(Facebook)`
    width: 21px;
    height: 21px;
    fill: #B9B9B9;
`;

export const TwitterIcon = styled(Twitter)`${iconSmallCSS}`;

