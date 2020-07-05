import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '~/styles/colors';

import { Container, Header, Title, Content } from './styles';

function Card({ title, icon, height, children }) {
  return (
    <Container height={height}>
      <Header>
        <Icon name={icon} size={22} color={colors.primary} />
        <Title>{title}</Title>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
};

export default Card;
