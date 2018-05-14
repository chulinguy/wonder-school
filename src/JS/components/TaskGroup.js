import React from 'react';
import PropTypes from 'prop-types';

const TaskGroup = props => (
  <div>
    <h6>{props.title}</h6>
    <p>{`${props.numOfCompletedTask} of ${props.total} tasks complete`}</p>
  </div>
);

TaskGroup.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  numOfCompletedTask: PropTypes.number.isRequired
};

export default TaskGroup;