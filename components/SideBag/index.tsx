import React, { useState, useEffect } from 'react';
import Bag from './Bag';

import { Container } from './styles';

declare global {
  interface Window {
    toggleActiveMenu: (() => void) | undefined;
    toggleCloseMenu: (() => void) | undefined;
  }
}
const SideBag: React.FC = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const className = isActive ? 'open' : '';

  function toggleActiveMenu() {
    setIsActive((prev) => prev ? prev : !prev);
  }

  function toggleCloseMenu() {
    setIsActive((prev) => !prev);
  }


  window.toggleActiveMenu = toggleActiveMenu;
  window.toggleCloseMenu = toggleCloseMenu;

  return (
    <Container className={className}>
      {children}
    </Container>
  )
};

export default SideBag;