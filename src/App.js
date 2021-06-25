import React, { Component } from "react";
import axios from "axios";
import TodoContainer from "./TodoContainer";
import Form from './Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
    this.changeStatus = this.changeStatus.bind(this);
    this.submit = this.submit.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  async componentDidMount() {
    const { data } = await axios.get("/todos");
    this.setState({ todos: data });
  }

  async changeStatus(id, complete) {
    try {
      await axios.put(`/${id}`, { newStatus: complete });
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            todo.complete = !todo.complete;
            return todo;
          }
          return todo;
        })
      })
    } catch (err) {
      console.log(err);
    }
  }

  async deleteTodo(id) {
    try {
      await axios.delete(`/${id}`);
      this.setState({
        todos: this.state.todos.filter(todo => todo.id !== id),
      })
    } catch (err) {
      console.log(err);
    }
  }

  async submit(text) {
    const newTodo = (await axios.post('/create', { text })).data;
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <header>
          <h1>ToDos</h1>
        </header>
        <Form submit={this.submit}/>
        <div className="container">
          <TodoContainer
            deleteTodo={this.deleteTodo}
            todos={todos.filter((todo) => !todo.complete)}
            changeStatus={this.changeStatus}
          />
          <TodoContainer
            deleteTodo={this.deleteTodo}
            todos={todos.filter((todo) => todo.complete)} 
            changeStatus={this.changeStatus}
          />
        </div>
      </div>
    );
  }
}

export default App;
