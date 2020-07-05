import React from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import Background from '~/components/Background';
import colors from '~/styles/colors';

// import {} from './styles';

function Confirm({ route }) {
  const delivery = route.params.data;

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <Background />
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
  route: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.any).isRequired,
  }).isRequired,
};

export default Confirm;
