import React from 'react';
import {
  MessageBox,
  FormGroup,
  Input,
  Label,
  Text,
  Button,
} from '@adminjs/design-system';
import { styled } from '@adminjs/design-system/styled-components';
import { useTranslation } from 'adminjs';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
`;
const Form = styled.form`
  min-width: 320px;
`;
const Login: React.FC = () => {
  const { __APP_STATE__: props } = window as any & {
    __APP_STATE__: { errorMessage?: string | null; action?: string | null };
  };
  const { action, errorMessage: message } = props;
  const { translateComponent, translateMessage, translateButton } =
    useTranslation();
  return (
    <Wrapper>
      <Form action={action} method="POST">
        {message && (
          <MessageBox
            my="lg"
            message={
              message.split(' ').length > 1
                ? message
                : translateMessage(message)
            }
            variant="danger"
          />
        )}
        <FormGroup>
          <Label required>{translateComponent('Login.properties.email')}</Label>
          <Input
            name="email"
            placeholder={translateComponent('Login.properties.email')}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label required>
            {translateComponent('Login.properties.password')}
          </Label>
          <Input
            type="password"
            name="password"
            placeholder={translateComponent('Login.properties.password')}
            required
            autoComplete="new-password"
          />
        </FormGroup>
        <Text mt="xl" textAlign="center">
          <Button variant="contained">
            {translateComponent('Login.loginButton')}
          </Button>
        </Text>
      </Form>
      <Text mt="xl" textAlign="center">
        {translateMessage('registrationLinkMessage')}
        <a href="/register">{translateButton('register')}</a>
      </Text>
    </Wrapper>
  );
};

export { Login };
export default Login;
