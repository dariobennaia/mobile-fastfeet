import React, { useState } from 'react';
import { StatusBar, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Background from '~/components/Background';
import Camera from '~/components/Camera';

import colors from '~/styles/colors';
import api from '~/services/api';

import { Container, SubmitButton } from './styles';

function Confirm({ navigation, route }) {
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

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <Background>
        <Container>
          <Camera onAction={setPreview} />
          <SubmitButton
            onPress={() => preview && !loading && handleFinishDelivery()}
            disabled={!preview || loading}
          >
            {loading ? 'Aguarde...' : 'Enviar'}
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
