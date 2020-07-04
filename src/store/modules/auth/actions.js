export function signInRequest(deliverymanId) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { deliverymanId },
  };
}

export function signInSuccess(deliveryman) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { deliveryman },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  console.tron.log('clicou');
  return {
    type: '@auth/SIGN_OUT',
  };
}
