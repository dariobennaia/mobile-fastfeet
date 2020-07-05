import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  height: ${(props) => `${props.height}px`};
  margin-bottom: 10px;
  padding: 10px;
  align-self: stretch;
  background: ${colors.background};
  border: 1px solid ${colors.border};
  border-radius: 4px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  color: ${colors.primary};
  font-size: 14px;
  font-weight: bold;
  margin-left: 5px;
`;

export const Content = styled.View`
  justify-content: space-between;
  flex: 1;
`;
