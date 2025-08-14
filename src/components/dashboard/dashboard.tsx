import { useTranslation } from 'adminjs';
import { Box, Text, Header } from '@adminjs/design-system';
import { styled } from '@adminjs/design-system/styled-components';
import React from 'react';

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Dashboard: React.FC = () => {
  const { translateMessage } = useTranslation();
  return (
    <Wrapper>
      <Header.H2>{translateMessage('welcomeOnBoard_title')}</Header.H2>
      <Text variant="sm" mb={5}>
        {translateMessage('welcomeOnBoard_subtitle')}
      </Text>
    </Wrapper>
  );
};

export default Dashboard;
