import React from 'react';
import PropTypes from 'prop-types';
import TaskGroup from './TaskGroup';

const ThingsToDoPanel = props => (
  <div>
    <h3>Things To Do </h3>
    {props.taskGroups.map(taskGroup => (
      <TaskGroup
        title={taskGroup.name}
        total={taskGroup.total}
        numOfCompletedTask={taskGroup.numOfCompletedTask}
      />
    ))}
  </div>
);

ThingsToDoPanel.propTypes = {
  taskGroups: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ThingsToDoPanel;
