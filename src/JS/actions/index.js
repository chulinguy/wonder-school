export const markTask = value => ({
  type: 'MARK_TASK_AS_COMPLETED',
  value
});

export const unmarkTask = value => ({
  type: 'UNMARK_TASK_AS_COMPLETED',
  value
});

export const changeGroup = value => ({
  type: 'GROUP_CHANGE',
  value
});

export const loadTasks = value => ({
  type: 'LOAD_TASKS',
  value
});

