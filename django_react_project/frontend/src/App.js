import React, { Component } from 'react';
import './styles/App.css';
import DataList from './components/DataList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DataList />
      </div>
    );
  }
}

export default App;
