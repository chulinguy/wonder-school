import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TaskGroup from './TaskGroup';
import { taskGroupInfoMappingFunc } from '../util';

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
      />
    ))}
  </div>
);

const mapStateToProps = ({ tasks }) => ({
  taskGroups: taskGroupInfoMappingFunc(tasks),
});

ThingsToDoPanel.propTypes = {
  taskGroups: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(ThingsToDoPanel);
