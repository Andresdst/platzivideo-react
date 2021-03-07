export const setFavorite = (/*informacion a transmitir*/payload) => ({
  type: 'SET_FAVORITE',
  payload,
});

export const deleteFavorite = (/*informacion a transmitir*/payload) => ({
  type: 'DELETE_FAVORITE',
  payload,
});

export const loginRequest = (/*informacion a transmitir*/payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = (/*informacion a transmitir*/payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const registerRequest = (/*informacion a transmitir*/payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const getVideoSource = (/*informacion a transmitir*/payload) => ({
  type: 'GET_VIDEO_SOURCE',
  payload,
});
