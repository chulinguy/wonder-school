export const taskGroupInfoMappingFunc = data => {
  const taskGroups = [];
  data.forEach(taskObj => {
    if (!taskGroups.filter(v => v.name === taskObj.group).length) {
      taskGroups.push({
        name: taskObj.group,
        total: 1,
        numOfCompletedTasks: taskObj.completedAt === null ? 0 : 1
      });
    } else {
      taskGroups.forEach((v, i) => {
        if (v.name === taskObj.group) {
          taskGroups[i].total += 1;
          taskGroups[i].numOfCompletedTasks = taskObj.completedAt === null ? taskGroups[i].numOfCompletedTasks : taskGroups[i].numOfCompletedTasks + 1;
        }
      });
    }
  });
  return taskGroups;
};
