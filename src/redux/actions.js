import axios from 'axios';

export const TYPES = {
  FETCH_DATA: 'FETCH_DATA',
  ADD_TODO: 'ADD_TODO',
  FILTER_STATE: 'FILTER_STATE',
};

const fetchDataAction = (todos) => {
  return {
    type: TYPES.FETCH_DATA,
    todos,
  }
}

const addTodoAction = (newTodo) => {
  return {
    type: TYPES.ADD_TODO,
    newTodo
  }
}

const filterStateAction = (id) => {
  return {
    type: TYPES.FILTER_STATE,
    id
  }
}

export const fetchData = (complete) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/todos?complete=${complete}`);
    dispatch(fetchDataAction(data));
  } catch(err) {
    console.error(err);
  }
}

export const addTodo = (text) => async (dispatch) => {
  try {
    const  { data } = await axios.post("/create", { text });
    dispatch(addTodoAction(data));
  } catch(err) {
    console.error(err);
  }
}

export const updateTodo = (id, complete) => async (dispatch) => {
  try {
    await axios.put(`/${id}`, { newStatus: complete });
    dispatch(filterStateAction(id))
  } catch(err) {
    console.error(err);
  }
}

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await axios.delete(`/${id}`);
    dispatch(filterStateAction(id))
  } catch(err) {
    console.error(err);
  }
}