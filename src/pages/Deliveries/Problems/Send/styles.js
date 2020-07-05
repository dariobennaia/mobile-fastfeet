import styled from 'styled-components/native';
import Button from '~/components/Button';
import colors from '~/styles/colors';

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  align-self: stretch;
`;

export const TextArea = styled.TextInput.attrs({
  textAlignVertical: 'top',
})`
  background: ${colors.white};
  padding: 20px;
  min-height: 250px;
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  box-shadow: 0 0 3px ${colors.border};
  elevation: 3;
  border-radius: 4px;
  color: ${colors.regular};
`;

export const SubmitButton = styled(Button)`
  background: ${colors.primary};
  align-self: stretch;
  margin-top: 15px;
  margin-bottom: 15px;
  box-shadow: 0 0 3px ${colors.border};
  elevation: 3;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;
