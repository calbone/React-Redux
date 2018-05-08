const initState = {
  services: []
};

export function tasksReducer(state = initState, action) {
  switch (action.type) {
    case 'FETCH_SERVICE':
      return { ...state, services: action.payload };
    default:
      return state;
  }
}
