import React, { useState, useRef } from 'react';
import { StatusBar, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RNCamera } from 'react-native-camera';
import Background from '~/components/Background';
import colors from '~/styles/colors';
import api from '~/services/api';
import {
  Container,
  WrapperCamera,
  Camera,
  SubmitButton,
  Action,
  Wrapper,
  Preview,
} from './styles';

function Confirm({ navigation, route }) {
  const camera = useRef();
  const { id } = route.params;

  const { id: deliverymanId } = useSelector(
    (state) => state.deliveryman.profile,
  );

  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  async function handleFinishDelivery() {
    try {
      setLoading(true);
      const formData = new FormData();

      formData.append('file', {
        type: 'image/jpeg',
        uri: preview,
        name: preview.split('/').pop(),
      });

      const { data } = await api.post('files', formData);

      await api.put(`/deliveries/${id}/finish`, {
        deliverymanId,
        signatureId: data.id,
      });

      Alert.alert('Ok', 'Entrega finalizada!');
      navigation.navigate('List');
    } catch (err) {
      console.tron.log(err);
      Alert.alert('Ops!', 'Não foi possivel finalizar a entrega.');
    } finally {
      setLoading(false);
      setPreview(null);
    }
  }

  async function takePicture() {
    try {
      const data = await camera.current.takePictureAsync();
      setPreview(data.uri);
    } catch (err) {
      Alert.alert('Ops!', 'Não foi possivel capturar a imagem!');
    }
  }

  function handleClearPicture() {
    setPreview(null);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <Background>
        <Container>
          <WrapperCamera>
            {(!preview && (
              <Camera
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
                onGoogleVisionBarcodesDetected={({ barcodes }) => {
                  console.tron.log(barcodes);
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
          </WrapperCamera>
          <SubmitButton
            onPress={() => preview && !loading && handleFinishDelivery()}
            disabled={!preview || loading}
          >
            Enviar
          </SubmitButton>
        </Container>
      </Background>
    </>
  );
}

Confirm.navigationOptions = () => ({
  title: 'Confirmar entrega',
  headerStyle: {
    elevation: 0,
    backgroundColor: colors.primary,
  },
});

Confirm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.any).isRequired,
  }).isRequired,
};

export default Confirm;
