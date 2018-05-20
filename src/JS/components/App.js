import React, { Component } from 'react';
import ThingsToDoPanel from './ThingsToDoPanel';
import TaskGroupPanel from './TaskGroupPanel';
import exampleData from '../example';
import { dataOrganizingFunc } from '../util';

class App extends Component {
  constructor() {
    super();
    this.state = {
      taskGroups: dataOrganizingFunc(exampleData),
      activeGroup: '',
      taskObjs: exampleData,
    };
    this.updateActiveGroup = this.updateActiveGroup.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  updateActiveGroup(group) {
    this.setState({ activeGroup: group });
  }

  render() {
    return (
      <div className="App container-fluid">
        <ThingsToDoPanel
          taskGroups={this.state.taskGroups}
          updateActiveGroup={this.updateActiveGroup}
        />
        <TaskGroupPanel
          activeGroup={this.state.activeGroup}
          taskObjs={this.state.taskObjs}
        />
      </div>
    );
  }
}

export default App;
