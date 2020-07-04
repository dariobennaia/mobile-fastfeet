export function updateProfileRequest(data) {
  return {
    type: '@deliveryman/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@deliveryman/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: '@deliveryman/UPDATE_PROFILE_FAILURE',
  };
}
