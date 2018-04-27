const INPUTTASK = 'INPUT_TASK';
const ADDTASK = 'ADD_TASK';

export const inputTask = task => ({
  type: INPUTTASK,
  payload: {
    task
  }
});

export const addTask = task => ({
  type: ADDTASK,
  payload: {
    task
  }
});
