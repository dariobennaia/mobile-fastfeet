import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';
import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
`;

export const CameraRN = styled(RNCamera)`
  height: 444.06px;
  margin-bottom: 10px;
`;

export const Preview = styled.Image`
  align-self: stretch;
  height: 444.06px;
`;

export const Wrapper = styled.View`
  height: 444.06px;
  margin-top: -454.06px;
  margin-bottom: 10px;
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
