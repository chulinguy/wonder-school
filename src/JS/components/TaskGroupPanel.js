import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Task from './Task';
import { changeGroup } from '../actions';

const TaskGroupPanel = props => {
  const TGclickHandler = () => { props.changeGroup('ALL_GROUPS'); };
  return (
    <div className="col-xs-6" id="task-group-panel">
      <div
        id="all-group"
        onClick={TGclickHandler}
        onKeyPress={TGclickHandler}
        role="menuitem"
        tabIndex={0}
      >ALL GROUPS
      </div>
      <div id="task-group-heading">
        <h3>Task Group</h3>
      </div>
      {props.tasks.filter(taskObj => taskObj.group === props.activeGroup || props.activeGroup === 'ALL_GROUPS').map(taskObj => (
        <Task
          name={taskObj.task}
          completedAt={taskObj.completedAt}
          id={taskObj.id}
          key={taskObj.id}
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({ activeGroup, tasks }) => ({
  activeGroup,
  tasks,
});

const mapDispatchToProps = {
  changeGroup
};

TaskGroupPanel.propTypes = {
  activeGroup: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeGroup: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskGroupPanel);

