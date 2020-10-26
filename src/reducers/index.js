const reducer = (state, action) => {

  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state, //el resto del estado
        myList: [...state.mylist/*el resto de myList*/,action.payload/*nuevo objeto*/],
      };
    default:
      return state;
  }
};

export default reducer;
