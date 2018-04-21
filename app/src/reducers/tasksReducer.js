const initState = {
  task: '',
  tasks: []
};

export function tasksReducer(state = initState, action) {
  switch(action.type) {
    case 'INPUT_TASK':
      return { ...state, task:action.payload.task }
    case 'ADD_TASK':
      return { ...state, tasks:state.tasks.concat([action.payload.task]) }
    default:
      return state;
  }
}

