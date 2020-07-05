import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
`;

export const Header = styled.View`
  align-items: center;
  height: 100px;
  background: ${colors.primary};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  margin-top: -80px;
  padding: 0 30px;
`;
