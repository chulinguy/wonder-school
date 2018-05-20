import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Task from './Task';

const TaskGroupPanel = props => (
  <div>
    <h3>Task Group</h3>
    {props.tasks.filter(taskObj => taskObj.group === props.activeGroup).map(taskObj => (
      <Task
        name={taskObj.task}
        completedAt={taskObj.completedAt}
        id={taskObj.id}
      />
    ))}
  </div>
);

const mapStateToProps = state => ({
  activeGroup: state.activeGroupReducer,
  tasks: state.taskReducer
});


TaskGroupPanel.propTypes = {
  activeGroup: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(TaskGroupPanel);

