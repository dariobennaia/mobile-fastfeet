import React, { useEffect, useState } from 'react';
import { StatusBar, Alert, View } from 'react-native';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';
import Background from '~/components/Background';
import colors from '~/styles/colors';
import api from '~/services/api';

import {
  Container,
  Header,
  Title,
  ListProblems,
  Item,
  Description,
  Date,
  DescriptionContainer,
  DateContainer,
} from './styles';

function List({ route }) {
  const { id } = route.params;
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const { data } = await api.get(`/deliveries/${id}/problems`);
        setProblems(
          data.map((v) => ({
            ...v,
            createdAtFormated: format(parseISO(v.createdAt), 'dd/MM/yyyy'),
          })),
        );
      } catch (err) {
        Alert.alert('Ops!', 'Não foi possivel mostrar as informações');
      }
    }
    load();
  }, [id]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <Background>
        <Container>
          <Header>
            <Title>
              {problems.length > 0
                ? `Encomenda ${problems[0].id}`
                : 'Nenhum problema encontrado'}
            </Title>
          </Header>
          <ListProblems
            data={problems}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <Item>
                <DescriptionContainer>
                  <Description>{item.description}</Description>
                </DescriptionContainer>

                <DateContainer>
                  <Date>{item.createdAtFormated}</Date>
                </DateContainer>
              </Item>
            )}
          />
        </Container>
      </Background>
    </>
  );
}

List.navigationOptions = () => ({
  title: 'Visualizar problemas',
  headerStyle: {
    elevation: 0,
    backgroundColor: colors.primary,
  },
});

List.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.any).isRequired,
  }).isRequired,
};

export default List;
