const reducer = (state, action) => {

  switch (action.type) {
    case 'SET_FAVORITE':
      console.log(state)
      return {
        ...state, //el resto del estado
        mylist: [...state.mylist/*el resto de myList*/,action.payload/*nuevo objeto*/],
      };
    default:
      return state;
  }
};

export default reducer;
