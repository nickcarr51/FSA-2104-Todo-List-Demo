import React from "react";

const TodoContainer = ({ todos, changeStatus, deleteTodo }) => {
  return (
    <div className="todo-container">
      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            className="card"
            onClick={() => changeStatus(todo.id, !todo.complete)}
          >
            <h4 className={todo.complete ? "strike-through" : ""}>
              {todo.text}
            </h4>
            {
              todo.complete && 
              <button
                onClick={() => deleteTodo(todo.id)}
              >X</button>
            }
          </div>
        );
      })}
    </div>
  );
};

export default TodoContainer;
