import { takeLatest, call, put, all, delay } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { deliverymanId } = payload;
    const { data } = yield call(api.get, `deliverymen/${deliverymanId}`);
    if (!data.id) {
      throw new Error('Erro no login');
    }
    yield delay(3000);
    yield put(signInSuccess(data));
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados!',
    );
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
