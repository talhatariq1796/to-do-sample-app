import { ADD_TODO, TOGGLE_TODO } from "./actions";

const initialState = {
  todos: [
    {
      id: 1,
      title: "Task Title 1",
      description: "Description for the provided task",
      completed: false,
    },
    {
      id: 2,
      title: "Task Title 2",
      description: "Description for the provided task",
      completed: false,
    },
  ],
  idCounter: 2,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: state.idCounter + 1, // Increment the counter to generate a new id
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
      };
      return {
        ...state,
        todos: [newTodo, ...state.todos],
        idCounter: state.idCounter + 1, // Increment the counter
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
    default:
      return state;
  }
};

export default todoReducer;
