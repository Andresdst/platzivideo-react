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
