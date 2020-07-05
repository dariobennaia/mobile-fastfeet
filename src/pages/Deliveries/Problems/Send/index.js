import React, { useState } from 'react';
import { StatusBar, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Background from '~/components/Background';
import colors from '~/styles/colors';
import api from '~/services/api';

import { TextArea, SubmitButton, Scroll } from './styles';

function Send({ navigation, route }) {
  const { id } = route.params;
  const { id: deliverymanId } = useSelector(
    (state) => state.deliveryman.profile,
  );
  const [description, setDescription] = useState('');
  const [sending, setSending] = useState(false);

  async function handleSendProblem() {
    try {
      if (description === '') {
        Alert.alert('Ops!', 'Informe uma descrição para o problema!');
        return;
      }
      setSending(true);
      await api.post(`/deliveries/${id}/problems`, {
        description,
        deliverymanId,
      });
      Alert.alert(
        'Ok',
        'Seu problema foi informado, aguarde para mais informações!',
      );
      navigation.navigate('List');
    } catch (err) {
      Alert.alert('Ops!', 'Não foi possivel registrar a informação.');
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <Background>
        <Scroll>
          <TextArea
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            placeholder="Inclua aqui o problema que ocorreu na entrega."
            autoCorrect={false}
            multiline
            numberOfLines={8}
            returnKeyType="send"
            value={description}
            onChangeText={setDescription}
            onSubmitEditing={handleSendProblem}
          />
          <SubmitButton
            onPress={() => !sending && handleSendProblem()}
            disabled={sending}
          >
            Enviar
          </SubmitButton>
        </Scroll>
      </Background>
    </>
  );
}

Send.navigationOptions = () => ({
  title: 'Informar problema',
  headerStyle: {
    elevation: 0,
    backgroundColor: colors.primary,
  },
});

Send.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.any).isRequired,
  }).isRequired,
};

export default Send;
