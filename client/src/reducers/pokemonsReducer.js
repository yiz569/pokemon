const pokemonsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POKEMON':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default pokemonsReducer;
