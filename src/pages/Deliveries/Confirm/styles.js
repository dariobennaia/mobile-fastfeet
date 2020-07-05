import styled from 'styled-components/native';
import Button from '~/components/Button';
import colors from '~/styles/colors';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  align-self: stretch;
  height: 500px;
`;

export const SubmitButton = styled(Button)`
  background: ${colors.primary};
  align-self: stretch;
  margin-top: 30px;
  margin-bottom: 15px;
  box-shadow: 0 0 3px ${colors.border};
  elevation: 3;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;
