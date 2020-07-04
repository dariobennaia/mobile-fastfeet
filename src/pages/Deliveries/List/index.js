import React, { useState, useEffect, useCallback } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { parseISO, format } from 'date-fns';

import api from '~/services/api';
import Item from './Item';
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

function List() {
  const deliveryman = useSelector((state) => state.deliveryman.profile);

  const [deliveries, setDeliveries] = useState([]);
  const [currentStatus, setCurrentStatus] = useState('pending');
  const [currentPage, setCurrentPage] = useState(1);
  const [refresh, setRefresh] = useState(false);

  function handleChangeStatus(status) {
    setCurrentStatus(status);
    setCurrentPage(1);
  }

  async function handleShow(id) {}

  function getCurrentStep(data) {
    if (data.startDate && !data.endDate) return 2;
    if (data.endDate) return 3;
    return 1;
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
    loadDeliveries();
  }, [loadDeliveries]);

  return (
    <Container>
      <Header>
        <Title>Entregas</Title>
        <Actions>
          <Action
            active={currentStatus === 'pending'}
            onPress={() => handleChangeStatus('pending')}
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
            <Item onShow={() => handleShow(item.id)} data={item} />
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

export default List;
