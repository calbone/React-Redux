const initState = {
  historyList: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_HISTORY':
      return { ...state, historyList: action.payload.data };
    default:
      return state;
  }
};
