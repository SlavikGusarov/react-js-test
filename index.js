import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import TodoList from './src/ToDo/TodoList';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="wrapper">
        <h1>React tutorial</h1>
        <TodoList />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
