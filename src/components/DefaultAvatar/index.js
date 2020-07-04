import React from 'react';
import PropTypes from 'prop-types';
import { Container, AvatarName } from './styles';

function DefaultAvatar({ initials, size }) {
  return (
    <Container size={size}>
      <AvatarName size={size}>{initials}</AvatarName>
    </Container>
  );
}

DefaultAvatar.propTypes = {
  initials: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default DefaultAvatar;
