import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  border-radius: 4px;
  border: 0.4px solid ${colors.border};
  margin-bottom: 20px;
`;

export const Header = styled.View`
  padding: 10px 15px;
  flex-direction: row;
  align-items: baseline;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${colors.primary};
  font-weight: bold;
  margin-left: 5px;
`;

export const Content = styled.View`
  padding: 20px 20px;
  align-items: stretch;
  justify-content: center;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${colors.ternary};
  padding: 20px 20px;
`;

export const FooterTitle = styled.Text`
  font-size: 7px;
  color: ${colors.regular};
`;

export const FooterValue = styled.Text`
  font-size: 12px;
  color: ${colors.darker};
  font-weight: bold;
  opacity: 0.8;
`;

export const Details = styled.Text`
  font-size: 12px;
  color: ${colors.primary};
  font-weight: bold;
  align-self: flex-end;
`;
