import React, { useRef, useState } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, CameraRN, Action, Wrapper, Preview } from './styles';

function Camera({ onAction }) {
  const camera = useRef();
  const [preview, setPreview] = useState(null);

  async function takePicture() {
    try {
      const data = await camera.current.takePictureAsync();
      setPreview(data.uri);
      onAction(data.uri);
    } catch (err) {
      Alert.alert('Ops!', 'Não foi possivel capturar a imagem!');
    }
  }

  function handleClearPicture() {
    setPreview(null);
  }

  return (
    <Container>
      {(!preview && (
        <CameraRN
          ref={camera}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: 'Permissão para usar a camera do dispositivo',
            message: 'Precisamos da sua permissão para usar a camera',
            buttonPositive: 'Sim',
            buttonNegative: 'Não',
          }}
        />
      )) || <Preview source={{ uri: preview }} />}
      <Wrapper>
        {(!preview && (
          <Action onPress={takePicture}>
            <Icon name="photo-camera" size={29} color="#fff" />
          </Action>
        )) || (
          <Action onPress={handleClearPicture} clear>
            <Icon name="clear" size={29} color="#fff" />
          </Action>
        )}
      </Wrapper>
    </Container>
  );
}

Camera.propTypes = {
  onAction: PropTypes.func.isRequired,
};

export default Camera;
