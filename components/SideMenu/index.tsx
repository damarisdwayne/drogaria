import React, { useState, useEffect } from 'react';

import { Container } from './styles';

declare global {
  interface Window {
    toggleActiveSideMenu: (() => void) | undefined;
  }
}

const SideMenu: React.FC = ({ children }) => {
  const [isActive, setIsActive] = useState(true);

  const className = isActive ? 'open' : '';

  function toggleActiveSideMenu() {
    setIsActive((prev) => !prev);
  }

  window.toggleActiveSideMenu = toggleActiveSideMenu;

  return <Container className={className}>{children}</Container>;
};

export default SideMenu;