import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ value: e.target.value});
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.value);
    this.setState({value: ''});
  }

  render() {
    console.log('this.props.todos', this.props.todos);
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="todo">Add new todo</label>
          <input type="text" name="todo" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Add new todo"/>
        </form>
        {this.props.todos.map(t => <p>{t}</p>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, {addTodo})(App);
