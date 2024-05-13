// TodoList.js
import React, { useState } from "react";
import { connect } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  editTodo,
  toggleDescription,
} from "../redux/actions";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { MdArrowDropUp } from "react-icons/md";

const TodoList = ({
  todos,
  toggleTodo,
  removeTodo,
  editTodo,
  updateTodos,
  toggleDescription,
}) => {
  const [editedTask, setEditedTask] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [previousTask, setPreviousTask] = useState(null);

  const handleEditClick = (task) => {
    setEditedTask(task);
    setEditedTitle(task.title);
    setEditedDescription(task.description);
    setPreviousTask(task);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (!editedTitle.trim()) return;
    editTodo(editedTask.id, editedTitle, editedDescription);
    setEditedTask(null);
    setEditedTitle("");
    setEditedDescription("");
    setPreviousTask(null);
  };

  const handleCancelEdit = () => {
    setEditedTask(null);
    setEditedTitle(previousTask.title);
    setEditedDescription(previousTask.description);
    setPreviousTask(null);
  };
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
    const handleToggleDescription = (taskId) => {
      toggleDescription(taskId);
    };

    const sortedTodos = incompleteTodos.concat(completeTodos);

    return sortedTodos.map((todo) => (
      <div
        key={todo.id}
        className="flex flex-col w-full  relative p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        {editedTask && editedTask.id === todo.id ? (
          <form onSubmit={handleEditSubmit} className="w-full">
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="bg-gray-50 mb-5 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              className="bg-gray-50 border mb-5 resize-none outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCancelEdit}
              className="bg-gray-500 ml-5 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
          </form>
        ) : (
          <>
            <h5
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {todo.title}
            </h5>

            {todo.showDescription && (
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {todo.description}
              </p>
            )}
            <button
              className="absolute bottom-3 right-3 text-gray-600"
              onClick={() => handleToggleDescription(todo.id)}
            >
              {todo.showDescription ? (
                <MdArrowDropUp />
              ) : (
                <IoMdArrowDropright />
              )}
            </button>
            <div className="absolute top-3 right-1 flex items-center gap-2">
              <input
                type="checkbox"
                className="w-[20px] h-[15px] bg-black outline-none cursor-pointer"
                onClick={() => toggleTodo(todo.id)}
                checked={todo.completed}
              />
              {!todo.completed && (
                <CiEdit
                  color=""
                  onClick={() => handleEditClick(todo)}
                  size={20}
                  className="cursor-pointer"
                />
              )}
              <MdDeleteOutline
                color="red"
                onClick={() => removeTodo(todo.id)}
                size={20}
                className="cursor-pointer"
              />
            </div>
          </>
        )}
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
  removeTodo: (id) => dispatch(removeTodo(id)),
  editTodo: (id, title, description) =>
    dispatch(editTodo(id, title, description)),
  toggleDescription: (id) => dispatch(toggleDescription(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
