const ADDTASK = 'ADD_TASK';

export const inputTask = (task) =>({
  type: 'INPUT_TASK',
  payload: {
    task
  }
});

export const addTask = (task) => ({
  type: ADDTASK,
  payload: {
    task
  }
});

export const resetTask = (task) => ({
  type: 'RESET_TASK'
});