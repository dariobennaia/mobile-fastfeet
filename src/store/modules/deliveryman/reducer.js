import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  loading: false,
};

export default function deliveryman(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@deliveryman/UPDATE_PROFILE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@deliveryman/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        draft.loading = false;
        break;
      }
      case '@deliveryman/UPDATE_PROFILE_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.deliveryman;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }
      default:
    }
  });
}
