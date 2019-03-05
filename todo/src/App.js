import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo, toggleCompleted } from './actions';

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
  handleToggle = e => {
    e.preventDefault();
    this.props.toggleCompleted(e.target.textContent);
  }

  render() {
    // console.log('this.props.todos', this.props.todos);
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="todo">Add new todo</label>
          <input type="text" name="todo" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Add new todo"/>
        </form>
        {this.props.todos.map((t, i) => <div key={i} className={t.completed ? 'strikethrough' : 'normal'} onClick={this.handleToggle} value={t.value}>{t.value}</div>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, {addTodo, toggleCompleted})(App);
