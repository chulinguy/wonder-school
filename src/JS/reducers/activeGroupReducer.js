const activeGroupReducer = (state = '', action) => {
  switch (action.type) {
    case 'GROUP_CHANGE':
    // console.log('changing group');
      return action.value;
    default:
      return state;
  }
};

export default activeGroupReducer;
