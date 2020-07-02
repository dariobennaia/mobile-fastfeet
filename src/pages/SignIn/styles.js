import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Input from '~/components/Input';

export const Container = styled.KeyboardAvoidingView.attrs({
  enable: Platform.OS === 'ios',
  behavior: Platform.OS === 'ios' ? 'padding' : '',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 35px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 15px;
`;
