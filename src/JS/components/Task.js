import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { markTask, unmarkTask } from '../actions';

const Task = props => (
  <div
    onClick={props.completedAt === null ? markTask : unmarkTask}
    onKeyPress={props.completedAt === null ? markTask : unmarkTask}
    role="menuitem"
    tabIndex={props.id - 1}
  >
    <p>{props.name}</p>
  </div>
);

const mapDispatchToProps = {
  markTask,
  unmarkTask,
};

Task.propTypes = {
  name: PropTypes.string.isRequired,
  completedAt: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};

export default connect(null, mapDispatchToProps)(Task);