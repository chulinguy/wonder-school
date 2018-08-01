import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ThingsToDoPanel from './ThingsToDoPanel';
import TaskGroupPanel from './TaskGroupPanel';
import { loadTasks } from '../actions';

class App extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    // fetch('http://localhost:3005/api').then(data => { console.log(data); });
    fetch('http://localhost:3005/api')
      .then(res => res.json())
      .then(data => { 
        if (data === 'error') alert('There is an error with the app\'s back end, please try again later')
        else this.props.loadTasks(data); 
        this.setState({ loaded: true})
      });
  }

  render() {
    return (
      this.state.loaded? 
      (<div className="App container-fluid">
        <ThingsToDoPanel />
        <TaskGroupPanel />
      </div>) : <h5>Loading ... </h5>
    );
  }
}

App.propTypes = {
  loadTasks: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  loadTasks
};

export default connect(null, mapDispatchToProps)(App);

