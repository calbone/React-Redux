const initState = {
  serviceList: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_SERVICE':
      return { ...state, serviceList: action.payload };
    default:
      return state;
  }
};
