import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  padding: 0 15px;
  height: 45px;
  background: ${colors.white};

  flex-direction: row;
  align-items: center;
  border-radius: 4px;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: colors.regularLight,
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: ${colors.regular};
`;
