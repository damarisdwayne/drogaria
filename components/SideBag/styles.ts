import styled from 'styled-components';

export const Container = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;;
  height: 100%;
  background: #FFFFFF;  

  @media (min-width: 1024px) {
    width: 400px;
    box-shadow: -7px 0 5px -6px rgba(0, 0, 0, 0.075);
  }

  @media (min-width: 1440px) {
    width: 400px;
  }

  transition: 0.5s transform cubic-bezier(0.5, 0, 0, 1);
  transform: translateX(100%);

  &.open {
    transform: translateX(0);
  }
  
  @media (min-width: 1024px) {
    &.scrollOpen {
      transform: translateX(0);
    }
  }
`;