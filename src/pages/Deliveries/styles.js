import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
  padding: 0 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 0 20px 0 0;
`;

export const Avatar = styled.Image`
  height: 68px;
  width: 68px;
  border-radius: 34px;
`;

export const InfoContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
`;

export const Welcome = styled.Text`
  font-size: 11px;
  color: ${colors.regular};
`;

export const Name = styled.Text`
  font-size: 22px;
  color: ${colors.darker};
  font-weight: bold;
`;

export const SignOut = styled(TouchableOpacity)`
  align-items: flex-end;
  justify-content: center;
  height: 35px;
  width: 35px;
`;

export const SignOutContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Content = styled.View`
  margin-top: 20px;
  flex: 1;
`;

export const AvatarNameContainer = styled.View`
  height: 68px;
  width: 68px;
  border-radius: 34px;
  align-items: center;
  justify-content: center;
  background: ${colors.backgroundSecondary};
`;

export const AvatarName = styled.Text`
  font-size: 32px;
  text-transform: uppercase;
  color: ${colors.secondary};
`;
