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
      className="row flex-parent group-div"
    >
      <div className="col-xs-2 flex-child">
        <img src={groupLogo} className="taskGroup-logo vertical-center" alt="logo" />
      </div>
      <div className="col-xs-10">
        <div className="drop-5px">
          <h6 className="bold-text no-margin">{props.title}</h6>
          <p className="gray-text">{`${props.numOfCompletedTasks} OF ${props.total} TASKS COMPLETE`}</p>
        </div>
      </div>
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
