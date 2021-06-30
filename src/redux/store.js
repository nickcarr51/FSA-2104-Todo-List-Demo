import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { TYPES } from './actions';


const initialState = {
  todos: [],
}

const filterState = (state, action) => {
  return {
    ...state,
    todos: state.todos.filter(todo => todo.id !== action.id)
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case TYPES.FETCH_DATA:
      return {
        ...state,
        todos: action.todos,
      }
    case TYPES.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.newTodo]
      }
    case TYPES.FILTER_STATE:
      return filterState(state, action)
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
