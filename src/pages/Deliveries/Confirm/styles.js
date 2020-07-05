import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';
import Button from '~/components/Button';
import colors from '~/styles/colors';

export const Container = styled.View`
  align-self: stretch;
`;

export const WrapperCamera = styled.View`
  border-radius: 4px;
`;

export const Camera = styled(RNCamera)`
  height: 400px;
`;

export const Preview = styled.Image`
  height: 400px;
  border-radius: 4px;
`;

export const Wrapper = styled.View`
  height: 400px;
  margin-top: -400px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const Action = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.clear ? colors.danger : colors.shadowSecondary};
  margin-left: ${(props) => (props.accept ? '10px' : 0)};
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
