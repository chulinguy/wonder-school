import React from 'react';
import PropTypes from 'prop-types';
import TaskGroup from './TaskGroup';

const ThingsToDoPanel = props => (
  <div>
    <h3>Things To Do </h3>
    {props.taskGroups.map((taskGroup, i) => (
      <TaskGroup
        key={taskGroup.name}
        index={i}
        title={taskGroup.name}
        total={taskGroup.total}
        numOfCompletedTasks={taskGroup.numOfCompletedTasks}
        updateActiveGroup={props.updateActiveGroup}
      />
    ))}
  </div>
);

ThingsToDoPanel.propTypes = {
  taskGroups: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateActiveGroup: PropTypes.func.isRequired,
};

export default ThingsToDoPanel;
