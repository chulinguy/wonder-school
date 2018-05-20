import exampleData from '../example';

const taskReducer = (state = exampleData, action) => {
  const newState = state.slice();
  switch (action.type) {
    case 'MARK_TASK_AS_COMPLETED':
      newState[action.value].completedAt = new Date();
      return newState;
    case 'UNMARK_MOVE_AS_COMPLETED':
      newState[action.value].completedAt = null;
      return newState;
    default:
      return state;
  }
};

export default taskReducer;
