import React from 'react';
import PropTypes from 'prop-types';

import { Container, Header, Content } from './styles';

function Background({ children }) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  );
}

Background.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Background;
