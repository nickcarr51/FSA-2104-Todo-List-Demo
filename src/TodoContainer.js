import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchData, updateTodo, deleteTodo } from './redux/actions';

class TodoContainer extends Component {
  constructor() {
    super()
  }

  async componentDidMount() {
    await this.props.fetchData(this.props.complete);
    
  }
  async componentDidUpdate(prevProps) {
    if (prevProps.complete !== this.props.complete) {
      await this.props.fetchData(this.props.complete);
    }
  }

  render() {
    const { todos } = this.props;
    return (
      <div className="todo-container">
        {todos.map((todo) => {
          return (
            <div
              key={todo.id}
              className="card"
              onClick={() => this.props.updateTodo(todo.id, !todo.complete)}
            >
              <h4 className={todo.complete ? "strike-through" : ""}>
                {todo.text}
              </h4>
              {
                todo.complete && 
                <button
                  onClick={() => this.props.deleteTodo(todo.id)}
                >X</button>
              }
            </div>
          );
        })}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = { fetchData, updateTodo, deleteTodo };

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
