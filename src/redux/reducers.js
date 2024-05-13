import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  TOGGLE_DESCRIPTION,
} from "./actions";

const initialState = {
  todos: [
    {
      id: 1,
      title: "Task Title 1",
      description: "Description for the provided task",
      completed: false,
      showDescription: false,
    },
    {
      id: 2,
      title: "Task Title 2",
      description: "Description for the provided task",
      completed: false,
      showDescription: false,
    },
  ],
  idCounter: 2,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: state.idCounter + 1,
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
        showDescription: false,
      };
      return {
        ...state,
        todos: [newTodo, ...state.todos],
        idCounter: state.idCounter + 1,
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                title: action.payload.title,
                description: action.payload.description,
              }
            : todo
        ),
      };
    case TOGGLE_DESCRIPTION:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, showDescription: !todo.showDescription }
            : todo
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
