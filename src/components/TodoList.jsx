"use client";
import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";

const TodoList = ({ todos, toggleTodo }) => {
  const renderTodos = () => {
    const incompleteTodos = [];
    const completeTodos = [];
    todos.forEach((todo) => {
      if (todo.completed) {
        completeTodos.push(todo);
      } else {
        incompleteTodos.push(todo);
      }
    });
    const sortedTodos = incompleteTodos.concat(completeTodos);
    return sortedTodos.map((todo) => (
      <div
        key={todo.id}
        className="flex flex-col w-full  relative p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
          className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {todo.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {todo.description}
        </p>
        <div className="absolute top-3 right-1">
          <input
            type="checkbox"
            className="w-[50px] h-[15px] bg-black"
            onClick={() => toggleTodo(todo.id)}
            checked={todo.completed}
          />
        </div>
      </div>
    ));
  };
  return (
    <div className="flex-1 p-10 w-full h-full overflow-y-scroll">
      <h2 className="text-center text-[32px]">TODO List</h2>
      <ul className="flex flex-col gap-5 mt-10 w-full">{renderTodos()}</ul>
    </div>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
