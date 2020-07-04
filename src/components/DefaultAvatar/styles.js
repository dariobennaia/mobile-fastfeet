import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  height: ${(props) => `${props.size}px`};
  width: ${(props) => `${props.size}px`};
  border-radius: ${(props) => `${props.size / 2}px`};
  align-items: center;
  justify-content: center;
  background: ${colors.backgroundSecondary};
`;

export const AvatarName = styled.Text`
  font-size: ${(props) => `${props.size / 2}px`};
  text-transform: uppercase;
  color: ${colors.secondary};
`;
