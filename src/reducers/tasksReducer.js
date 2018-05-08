const initState = {
  serviceList: []
};

export function tasksReducer(state = initState, action) {
  switch (action.type) {
    case 'FETCH_SERVICE':
      return { ...state, serviceList: action.payload };
    default:
      return state;
  }
}
