import React, { useState, useMemo } from 'react';
import { View, StatusBar, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Background from '~/components/Background';
import Card from '~/components/Card';
import colors from '~/styles/colors';
import api from '~/services/api';

import {
  Scroll,
  InfoTitle,
  InfoDescription,
  Row,
  OptionsContainer,
  Option,
  TitleButtonOption,
} from './styles';

function Details({ navigation, route }) {
  const delivery = route.params.data;
  const [starting, setStarting] = useState(false);

  const { id: deliverymanId } = useSelector(
    (state) => state.deliveryman.profile,
  );

  const actionDelivery = useMemo(() => {
    if (delivery.currentStep.id === 1) return 'Confirmar reditrada';
    if (delivery.currentStep.id === 2) return 'Confirmar entrega';
    return 'Entrega concluida';
  }, [delivery]);

  function handleSendProblem() {
    navigation.navigate('SendProblem', { id: delivery.id });
  }

  function handleShowProblems() {
    navigation.navigate('ListProblems', { id: delivery.id });
  }

  function handleFinishDelivery() {
    navigation.navigate('Confirm', { id: delivery.id });
  }

  async function handleStartDelivery() {
    try {
      if (starting) return;
      setStarting(true);
      await api.put(`/deliveries/${delivery.id}/start`, { deliverymanId });
      Alert.alert('Sucesso!', 'O pedido agora estará em fase de rota!');
      navigation.navigate('List');
    } catch (err) {
      Alert.alert('Ops!', 'Não foi possivel iniciar essa entrega!');
    } finally {
      setStarting(false);
    }
  }

  function handleSwitch() {
    if (!delivery.startDate) {
      Alert.alert(
        'Tem certeza?',
        'Você deseja retirar o pedido agora?',
        [{ text: 'Não' }, { text: 'Sim', onPress: handleStartDelivery }],
        { cancelable: false },
      );
      return;
    }

    if (delivery.startDate && !delivery.canceledAt) {
      handleFinishDelivery();
      return;
    }

    if (delivery.canceledAt) {
      Alert.alert('Ops!', 'Essa encomenda foi cancelada!');
      return;
    }

    Alert.alert('Hmm!', 'Essa encomenda já foi entregue!');
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <Background>
        <Scroll>
          <Card
            title="Informações da entrega"
            icon="local-shipping"
            height={206.65}
          >
            <>
              <View>
                <InfoTitle>Destinatário</InfoTitle>
                <InfoDescription>{delivery.recipient.name}</InfoDescription>
              </View>

              <View>
                <InfoTitle>Endereço de entrega</InfoTitle>
                <InfoDescription>{delivery.recipient.street}</InfoDescription>
              </View>

              <View>
                <InfoTitle>Produto</InfoTitle>
                <InfoDescription>{delivery.product}</InfoDescription>
              </View>
            </>
          </Card>

          <Card title="Situação da entrega" icon="event" height={158.55}>
            <>
              <View>
                <InfoTitle>Status</InfoTitle>
                <InfoDescription>{delivery.currentStep.value}</InfoDescription>
              </View>
              <Row>
                <View>
                  <InfoTitle>Data retirada</InfoTitle>
                  <InfoDescription>
                    {delivery.startDateFormated || '--/--/----'}
                  </InfoDescription>
                </View>

                <View>
                  <InfoTitle>Data entrega</InfoTitle>
                  <InfoDescription>
                    {delivery.endDateFormated || '--/--/----'}
                  </InfoDescription>
                </View>
              </Row>
            </>
          </Card>

          <OptionsContainer>
            <Option start onPress={handleSendProblem}>
              <Icon name="highlight-off" size={22} color={colors.danger} />
              <TitleButtonOption>Informar problema</TitleButtonOption>
            </Option>

            <Option center onPress={handleShowProblems}>
              <Icon name="info-outline" size={22} color={colors.warning} />
              <TitleButtonOption>Visualizar Problemas</TitleButtonOption>
            </Option>

            <Option end onPress={handleSwitch}>
              <Icon2 name="checkcircleo" size={18} color={colors.primary} />
              <TitleButtonOption>{actionDelivery}</TitleButtonOption>
            </Option>
          </OptionsContainer>
        </Scroll>
      </Background>
    </>
  );
}

Details.navigationOptions = () => ({
  title: 'Detalhes da encomenda',
  headerStyle: {
    elevation: 0,
    backgroundColor: colors.primary,
  },
});

Details.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.any).isRequired,
  }).isRequired,
};

export default Details;
