import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Background from '~/components/BackgroundLogin';
import { signInRequest } from '~/store/modules/auth/actions';
import Button from '~/components/Button';

import logo from '~/assets/logo.png';
import { Container, Form, FormInput } from './styles';

const SignIn = () => {
  const dispatch = useDispatch();

  const [deliverymanId, setDeliverymanId] = useState('');

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(deliverymanId));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            keyboardType="numeric"
            placeholder="Informe seu ID de cadastro"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            onChangeText={setDeliverymanId}
          />
          <Button onPress={handleSubmit} loading={loading}>
            Entrar no sistema
          </Button>
        </Form>
      </Container>
    </Background>
  );
};

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default SignIn;
