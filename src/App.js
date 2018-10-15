import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todos from './components/Todos/Todos';
import AddTodo from './components/AddItem/AddTodo';
import reducer from './store/reducer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

submitHandler(event) {
  const newTask = this.state.inputValue;
  this.props.addTodo(newTask);
  this.setState({ inputValue: '' })
}

handleChange(event) {
  const inputValue = event.target.value;
  this.setState({ inputValue });
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
      
        </header>
        <AddTodo
          inputValue={this.state.inputValue}
          handleChange={this.handleChange}
          submitHandler={this.submitHandler}
         />
        <Todos todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addTodo: (task) => dispatch({ type: "ADD_ITEM", task }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
