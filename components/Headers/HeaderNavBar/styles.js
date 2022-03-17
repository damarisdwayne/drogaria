import styled from 'styled-components'

export const Container = styled.nav`
    margin-top: 30px;
    width: 100%;
    overflow-X: hidden;
    background-color: #F7F7F7;
    

    > ul {
        display: flex;
        max-width: 1280px;
        width: 100%;
        align-items: center;
        list-style-type: none;
        margin: 0 auto;
        padding: 0 10px;
        white-space: nowrap;
        
        li {
            text-decoration: none;
            text-transform: uppercase;
            text-align: center;
            font-size: 13px;
            color: #555555;
            font-weight: 600;
            cursor: pointer;
            border-top: 1px solid transparent;
            border-left: 1px solid transparent;    
            border-right: 1px solid transparent;
            border-bottom: 2px solid transparent;
            transition: opacity 0.2s; 
            flex: 1;
            &:hover{
                color: #318cb8;
                background-color: #FFF;
            }

            button {
                padding: 20px 25px;

                &:hover{
                    color: #318cb8;
                }
            }

            @media(max-width: 1080px) {
              button{
                font-size: 12px;
              }
            }
        }
     }

     

     @media (max-width: 824px){
        display: none;
     }
`;

export const DropdownStyles = styled.div`
  .dropdown-option {
    outline: 0;
    color: #3f3f3f;
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
    transition: opacity 0.2s;
    &:hover,
    &:focus {
    color: #318cb8;
    }
    @media (max-width: 1140px){
        font-size: 10px;
     }    
  }
  .dropdown-root {
    z-index: 10;
    position: absolute;
  }
  .dropdown-container {
    position: absolute;
    overflow: hidden;
    box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25),
      0 30px 60px -30px rgba(0, 0, 0, 0.3),
      0 -18px 60px -10px rgba(0, 0, 0, 0.025);
    background: #fff;
    border-radius: 4px;
  }
  .dropdown-section {
    position: absolute;
  }
  .dropdown-background {
    position: absolute;
    bottom: 0;
    background: #f6f9fc;
    width: 100%;
  }
`;
