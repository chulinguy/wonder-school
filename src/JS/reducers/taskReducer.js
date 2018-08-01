const taskReducer = (state = [], action) => {
  const newState = state.slice();
  switch (action.type) {
    case 'LOAD_TASKS':
      return action.value;
    case 'MARK_TASK_AS_COMPLETED':
      // console.log('marking reducer');
      newState[action.value - 1].completedAt = new Date();
      return newState;
    case 'UNMARK_TASK_AS_COMPLETED':
    // console.log('unmarking reducer');
      newState[action.value - 1].completedAt = null;
      return newState;
    default:
      return state;
  }
};

export default taskReducer;
