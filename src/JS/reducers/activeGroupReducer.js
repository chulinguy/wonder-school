const activeGroupReducer = (state = '', action) => {
  switch (action.type) {
    case 'GROUP_CHANGE':
      return action.value;
    default:
      return state;
  }
};

export default activeGroupReducer;
