const actions = {
  LOGIN_REQUEST_START: 'LOGIN_REQUEST_START',
  JWT_LOGIN_REQUEST_START: 'JWT_LOGIN_REQUEST_START',
  LOGIN_REQUEST_SUCCESS: 'LOGIN_REQUEST_SUCCESS',
  LOGIN_REQUEST_FAILURE: 'LOGIN_REQUEST_FAILURE',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT_REQUEST_START: 'LOGOUT_REQUEST_START',
  LOGOUT_REQUEST_SUCCESS: 'LOGOUT_REQUEST_SUCCESS',
  LOGOUT_REQUEST_FAILURE: 'LOGOUT_REQUEST_FAILURE',

  login: credentials => ({
    type: actions.LOGIN_REQUEST_START,
    payload: credentials,
  }),
  jwtLogin: (history, userInfo) => ({
    type: actions.JWT_LOGIN_REQUEST_START,
    payload: { history, userInfo },
  }),
  loginRequestSuccess: userData => ({
    type: actions.LOGIN_REQUEST_SUCCESS,
    payload: userData,
  }),
  loginRequestFailure: err => ({
    type: actions.LOGIN_REQUEST_FAILURE,
    payload: err,
  }),
  logout: () => ({
    type: actions.LOGOUT_REQUEST_START,
  }),
  logoutRequestSuccess: () => ({
    type: actions.LOGOUT_REQUEST_SUCCESS,
  }),
  logoutRequestFailure: error => ({
    type: actions.LOGOUT_REQUEST_FAILURE,
    payload: error,
  }),
};
export default actions;
