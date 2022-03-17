import styled from 'styled-components'
import { ChevronDown, ChevronUp } from '../../../styles/Icons'


export const Container = styled.div`
    padding: 20px;
    visibility: hidden;
    
    .menu-open {
        visibility: visible;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background-color: #f7f7f7;
        color: #3f3f3f;
        
        flex-wrap: nowrap;
        min-width: 230px;
        padding: 15px;
        line-height: 30px;
        border-radius: 8px;
        
        span {
            font-size: 14px;
            
            &:hover {
                text-decoration: underline;
                cursor: pointer;
            }
        }
        
        h1 {
            font-size: 16px;
            color: #3f3f3f;
        }

        @media(max-width: 781px) {
            visibility: visible;
        }
    }


    @media(max-width: 780px) {
        visibility: visible;
    }
`;

export const MenuClose = styled.div`    
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 8px;
    margin-bottom: -10px;
    cursor: pointer;

    h1 {
        font-size: 15px;
        color: #3f3f3f;
    }
`;

export const ArrowDownIcon = styled(ChevronDown)`
    width: 20px;
    height: 20px;

    cursor: pointer;

    fill: #7D7D7D;
`;

export const ArrowUpIcon = styled(ChevronUp)`
    width: 20px;
    height: 20px;

    cursor: pointer;

    fill: #7D7D7D;
`;