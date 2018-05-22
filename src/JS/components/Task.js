import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { markTask, unmarkTask } from '../actions';
import completedLogo from '../../SVGs/Completed.svg';
import incompleteLogo from '../../SVGs/Incomplete.svg';
import lockedLogo from '../../SVGs/Locked.svg';

class Task extends Component {
  constructor(props) {
    super(props);
    this.taskClickHandler = this.taskClickHandler.bind(this);
  }

  lockCheck() {
    const dependencyArr = this.props.tasks[this.props.id - 1].dependencyIds;
    // lock task if there is a valid dependency that is not yet completed
    return dependencyArr.reduce((accu, taskID) => (accu || (this.props.tasks[taskID - 1] && this.props.tasks[taskID - 1].completedAt === null)), false);
  }

  logoFunc() {
    if (this.lockCheck()) return lockedLogo;
    else if (this.props.completedAt) return completedLogo;
    return incompleteLogo;
  }

  taskClickHandler() {
    if (!this.lockCheck()) {
      // console.log("not locked");
      if (this.props.completedAt === null) {
        // console.log("marking component");
        this.props.markTask(this.props.id);
      } else {
        // console.log("unmarking component");
        this.props.unmarkTask(this.props.id);
      }
    } else {
      // console.log("locked");
    }
  }

  textStyleChooser() {
    if (this.lockCheck()) return { color: 'gray' };
    else if (this.props.completedAt === null) return { textDecoration: 'none currentcolor solid' };
    return { textDecoration: 'line-through' };
  }

  render() {
    return (
      <div
        onClick={this.taskClickHandler}
        onKeyPress={this.taskClickHandler}
        role="menuitem"
        tabIndex={this.props.id - 1}
        className="row flex-parent task-div"
      >
        <div className="col-xs-2 flex-child">
          <img
            src={this.logoFunc()}
            className="Task-logo vertical-center"
            alt="logo"
          />
        </div>
        <div className="col-xs-10">
          <h6
            className="bold-text vertical-center no-margin"
            style={this.textStyleChooser()}
          >
            {this.props.name}
          </h6>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ tasks }) => ({
  tasks
});

const mapDispatchToProps = {
  markTask,
  unmarkTask,
};

Task.propTypes = {
  name: PropTypes.string.isRequired,
  completedAt: PropTypes.instanceOf(Date),
  id: PropTypes.number.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  markTask: PropTypes.func.isRequired,
  unmarkTask: PropTypes.func.isRequired,
};

Task.defaultProps = {
  completedAt: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
