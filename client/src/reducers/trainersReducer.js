const trainersReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TRAINERS':
      return action.payload;
    default:
      return state;
  }
};

export default trainersReducer;
