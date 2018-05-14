import React from 'react';
import PropTypes from 'prop-types';
import groupLogo from '../../SVGs/Group.svg';

const TaskGroup = props => (
  <div
    onClick={() => { props.updateActiveGroup(props.title); }}
    onKeyPress={() => { props.updateActiveGroup(props.title); }}
    role="menuitem" 
    tabIndex={props.index}
  >
    <img src={groupLogo} className="Group-logo" alt="logo" />
    <h6>{props.title}</h6>
    <p>{`${props.numOfCompletedTasks} of ${props.total} tasks complete`}</p>
  </div>
);

TaskGroup.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  numOfCompletedTasks: PropTypes.number.isRequired,
  updateActiveGroup: PropTypes.func.isRequired,
};

export default TaskGroup;