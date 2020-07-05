import React, { useState, useEffect, useCallback } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { parseISO, format } from 'date-fns';

import api from '~/services/api';
import Item from '../Item';
import colors from '~/styles/colors';

import {
  Container,
  Header,
  Title,
  Actions,
  Action,
  ListDeliveries,
  NoDataContainer,
  NoDataTitle,
} from './styles';

function FlatList() {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const deliveryman = useSelector((state) => state.deliveryman.profile);

  const [deliveries, setDeliveries] = useState([]);
  const [currentStatus, setCurrentStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [refresh, setRefresh] = useState(false);

  function handleChangeStatus(status) {
    setCurrentStatus(status);
    setCurrentPage(1);
  }

  async function handleShow(data) {
    navigation.navigate('Details', { data });
  }

  function getCurrentStep(data) {
    if (data.startDate && !data.endDate) return { id: 2, value: 'Retirada' };
    if (data.endDate) return { id: 3, value: 'Entregue' };
    return { id: 1, value: 'Pendente' };
  }

  const loadDeliveries = useCallback(async () => {
    try {
      setRefresh(true);
      const response = await api.get(
        `/deliverymen/${deliveryman.id}/deliveries`,
        {
          params: {
            status: currentStatus,
            page: currentPage,
          },
        },
      );

      const data = response.data.map((v) => ({
        ...v,
        createdAtFormated: format(parseISO(v.createdAt), 'dd/MM/yyyy'),
        startDateFormated:
          v.startDate && format(parseISO(v.startDate), 'dd/MM/yyyy'),
        endDateFormated: v.endDate && format(parseISO(v.endDate), 'dd/MM/yyyy'),
        currentStep: getCurrentStep(v),
      }));

      if (currentPage > 1) {
        setDeliveries((oldValue) => [...oldValue, ...data]);
        return;
      }
      setDeliveries(data);
    } catch (err) {
      Alert.alert('Ops!', 'Não foi possivel carregar as informações!');
    } finally {
      setRefresh(false);
    }
  }, [currentStatus, currentPage, deliveryman]);

  useEffect(() => {
    if (isFocused) {
      loadDeliveries();
    }
  }, [loadDeliveries, isFocused]);

  return (
    <Container>
      <Header>
        <Title>Entregas</Title>
        <Actions>
          <Action
            active={currentStatus === 'all'}
            onPress={() => handleChangeStatus('all')}
          >
            Pendentes
          </Action>
          <Action
            active={currentStatus === 'finished'}
            onPress={() => handleChangeStatus('finished')}
          >
            Entregues
          </Action>
        </Actions>
      </Header>
      {(deliveries.length > 0 && (
        <ListDeliveries
          data={deliveries}
          keyExtractor={(item) => String(item.id)}
          refreshing={refresh}
          onRefresh={() => setCurrentPage(1)}
          onEndReached={() => setCurrentPage(currentPage + 1)}
          onEndReachedThreshold={0.1}
          renderItem={({ item }) => (
            <Item onShow={() => handleShow(item)} data={item} />
          )}
        />
      )) || (
        <NoDataContainer>
          <Icon name="local-shipping" size={72} color={colors.secondary} />
          <NoDataTitle>Nenhuma entrega</NoDataTitle>
        </NoDataContainer>
      )}
    </Container>
  );
}

export default FlatList;
