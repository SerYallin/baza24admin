import React from 'react';
import { Box, BoxProps, cssClass, Navigation } from '@adminjs/design-system';
import { styled } from '@adminjs/design-system/styled-components';
import { ReduxState, useNavigationResources } from 'adminjs';
import { useSelector } from 'react-redux';

export const SIDEBAR_Z_INDEX = 50;
type Props = {
  isVisible: boolean;
};
const StyledSidebar = styled(Box)<BoxProps>`
  top: 0;
  bottom: 0;
  overflow-y: auto;
  width: 300px;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  z-index: ${SIDEBAR_Z_INDEX};
  background: #ffffff;

  transition: left 0.25s ease-in-out;

  &.hidden {
    left: -300px;
  }
  &.visible {
    left: 0;
  }
`;
const Sidebar: React.FC<Props> = ({ isVisible }) => {
  const resources = useSelector((state: ReduxState) => state.resources);
  const elements = useNavigationResources(resources);
  elements.unshift({
    label: 'dashboard',
    href: '/',
    icon: 'Home',
  });

  return (
    <StyledSidebar
      className={isVisible ? 'visible' : 'hidden'}
      data-css="sidebar"
    >
      <Box
        flexGrow={1}
        className={cssClass('Resources')}
        data-css="sidebar-resources"
      >
        <Navigation elements={elements} />
      </Box>
    </StyledSidebar>
  );
};

export { Sidebar };

export default Sidebar;
