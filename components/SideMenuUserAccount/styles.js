import styled from 'styled-components'
import { ChevronDown } from '../../styles/Icons'


export const Container = styled.div`
    padding: 30px 0;
    height: auto;
    margin-top: -110px;

    .menu-open {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background-color: #f7f7f7;
        margin-bottom: -10px;
        
        color: #3f3f3f;
        
        flex-wrap: nowrap;
        min-width: 220px;
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
    }

    @media(max-width: 781px) {
           visibility: hidden;
           margin-top: -38px;
           margin-bottom: -335px;
        }
`;

export const ArrowIcon = styled(ChevronDown)`
    width: 20px;
    height: 20px;

    cursor: pointer;

    fill: #7D7D7D;
`;