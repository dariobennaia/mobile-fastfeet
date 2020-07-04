import styled from 'styled-components/native';
import Button from '~/components/Button';
import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
  padding: 80px 40px 140px 40px;
  justify-content: space-between;
`;

export const AvatarContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.View`
  padding: 0px 0;
`;

export const Info = styled.View`
  padding-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: ${colors.regular};
`;

export const Description = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${colors.darker};
`;

export const SignOutButton = styled(Button)`
  align-items: flex-end;
  justify-content: center;
  background: ${colors.danger};
  align-items: center;
  justify-content: center;
`;
