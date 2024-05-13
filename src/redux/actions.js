export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const TOGGLE_DESCRIPTION = "TOGGLE_DESCRIPTION";

export const addTodo = (title, description) => ({
  type: ADD_TODO,
  payload: {
    title,
    description,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const editTodo = (id, title, description) => ({
  type: EDIT_TODO,
  payload: { id, title, description },
});

export const toggleDescription = (id) => ({
  type: TOGGLE_DESCRIPTION,
  payload: id,
});
