const reducer = (state, action) => {

  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state, //el resto del estado
        mylist: [...state.mylist/*el resto de myList*/, action.payload/*nuevo objeto*/],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        mylist: state.mylist.filter((items) => items.id !== action.payload/*id dado*/),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
