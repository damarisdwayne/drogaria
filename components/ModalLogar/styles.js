import styled, {css} from 'styled-components'

import { Facebook, At, KeyFill, Google } from '../../styles/Icons'

export const Container = styled.div`
    border-radius: 8px;
    z-index: 9999999;
    position: fixed;
    top: -100%;
    left: 0;
    right: 0;
    bottom: 100%;
    width: 590px;
    height: 100%;
    margin: 0 auto;
    background-color: #000;

    transition: 0.5s transform cubic-bezier(0.5, 0, 0, 1);
    transform: translateY(100%);

    &.open {
        transform: translateY(0);
    }
`;


export const Main = styled.div`
    padding: 20px;

    p {
        padding: 15px;
        border-bottom: 1px solid #ddd;
    }

    div {
        button {
            text-align: left;
            padding: 14px;
            position: relative;
            border-radius: 8px;
            color: #fff;
            font-size: 14px;
            width: 100%;
            font-weight: normal;
        }
        
        .btnFacebook {
            background: #3b5998;
        }
        .btnEmail {
            background: #9a9a9a;
        }
        .btnGoogle {
            background: #db4437;
        }
        .btnAt {
            background: #328cb8;
        }
    }
`;

export const FacebookIcon = styled(Facebook)`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    color: #FFF;
    fill: #FFF;
`;

export const AtIcon = styled(At)`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    color: #FFF;
    fill: #FFF;
    
`;

export const KeyIcon = styled(KeyFill)`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    color: #FFF;
    fill: #FFF;
`;

export const GoogleIcon = styled(Google)`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    color: #FFF;
    fill: #FFF;
`;