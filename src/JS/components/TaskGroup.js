import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeGroup } from '../actions';
import groupLogo from '../../SVGs/Group.svg';

const TaskGroup = props => {
  const TGclickHandler = () => { props.changeGroup(props.title); };
  return (
    <div
      onClick={TGclickHandler}
      onKeyPress={TGclickHandler}
      role="menuitem"
      tabIndex={props.index}
    >
      <img src={groupLogo} className="taskGroup-logo" alt="logo" />
      <h6>{props.title}</h6>
      <p>{`${props.numOfCompletedTasks} of ${props.total} tasks complete`}</p>
    </div>
  );
};

const mapDispatchToProps = {
  changeGroup
};

TaskGroup.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  numOfCompletedTasks: PropTypes.number.isRequired,
  changeGroup: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(TaskGroup);
