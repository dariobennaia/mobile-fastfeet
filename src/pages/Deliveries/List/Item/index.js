import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '~/styles/colors';
import TimeLine from '~/components/TimeLine';

import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTitle,
  FooterValue,
  Details,
} from './styles';

function Item({ data, onShow }) {
  return (
    <Container>
      <Header>
        <Icon name="local-shipping" size={22} color={colors.primary} />
        <Title>{data.product}</Title>
      </Header>
      <Content>
        <TimeLine
          currentStep={data.currentStep.id}
          hasProblem={!!data.canceledAt}
        />
      </Content>
      <Footer>
        <View>
          <FooterTitle>Data</FooterTitle>
          <FooterValue>{data.createdAtFormated}</FooterValue>
        </View>

        <View>
          <FooterTitle>Cidade</FooterTitle>
          <FooterValue>{data.recipient && data.recipient.city}</FooterValue>
        </View>

        <Details onPress={onShow}>Ver detalhes</Details>
      </Footer>
    </Container>
  );
}

Item.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  onShow: PropTypes.func.isRequired,
};

export default Item;
