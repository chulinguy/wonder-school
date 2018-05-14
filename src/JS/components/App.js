import React, { Component } from 'react';
import ThingsToDoPanel from './ThingsToDoPanel';
import exampleData from '../example';
import { dataOrganizingFunc } from '../util';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      taskGroups: dataOrganizingFunc(exampleData),
      activeGroup: null, 
    };
    this.updateActiveGroup = this.updateActiveGroup.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state)
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
      </div>
    );
  }
}

export default App;
