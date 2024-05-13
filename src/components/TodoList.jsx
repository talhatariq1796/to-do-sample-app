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
import { IoMdArrowDropright, IoMdClose } from "react-icons/io";
import { MdArrowDropUp } from "react-icons/md";
import { TiTick } from "react-icons/ti";

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
  const notCompletedTasks = todos.filter((todo) => todo.completed).length;
  const completedTasks = todos.length - notCompletedTasks;
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

    return (
      <>
        {sortedTodos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center w-full p-4 py-6 bg-[#FCFAFF] rounded-[10px]"
          >
            {editedTask && editedTask.id === todo.id ? (
              <form onSubmit={handleEditSubmit} className="w-full">
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="w-full bg-gray-50 mb-5 border outline-none border-gray-300 rounded-lg text-black p-3 hover:border-[#9E78CF] focus:border-[#9E78CF]"
                />
                <textarea
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                  className="w-full bg-gray-50 border mb-5 resize-none outline-none text-sm rounded-lg  block p-3 border-gray-300 text-black hover:border-[#9E78CF] focus:border-[#9E78CF]"
                ></textarea>
                <div className="flex items-center justify-end gap-2 w-full">
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#9E78CF] text-white px-4 py-2 rounded-lg"
                  >
                    Save
                  </button>
                </div>
              </form>
            ) : (
              <>
                <div>
                  <div className="flex gap-2 items-center">
                    <button
                      className="text-gray-600 text-[24px] mb-[6px]"
                      onClick={() => handleToggleDescription(todo.id)}
                    >
                      {todo.showDescription ? (
                        <MdArrowDropUp />
                      ) : (
                        <IoMdArrowDropright />
                      )}
                    </button>
                    <h5
                      style={{
                        textDecoration: todo.completed
                          ? "line-through"
                          : "none",
                        color: todo.completed ? "#35A07A" : "black",
                      }}
                      className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white"
                    >
                      {todo.title}
                    </h5>
                  </div>
                  {todo.showDescription && (
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {todo.description}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {!todo.completed ? (
                    <TiTick
                      className="cursor-pointer text-[#35A07A]"
                      fontSize={25}
                      onClick={() => toggleTodo(todo.id)}
                    />
                  ) : (
                    <IoMdClose
                      className="cursor-pointer text-red-700"
                      fontSize={25}
                      onClick={() => toggleTodo(todo.id)}
                    />
                  )}

                  {!todo.completed && (
                    <CiEdit
                      onClick={() => handleEditClick(todo)}
                      size={25}
                      className="cursor-pointer"
                    />
                  )}
                  <MdDeleteOutline
                    color="red"
                    onClick={() => removeTodo(todo.id)}
                    size={25}
                    className="cursor-pointer"
                  />
                </div>
              </>
            )}
          </div>
        ))}
        {sortedTodos?.length === 0 && (
          <div className="w-full h-[100px] flex justify-center items-center">
            Your todo list is empty
          </div>
        )}
      </>
    );
  };
  return (
    <div className="flex-1 p-10 w-full h-full">
      <div className="bg-[#F8F2FF] rounded-[20px] p-6 h-full overflow-y-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-center text-[16px] font-[400] text-[#272626]">
            Tasks to Do - {completedTasks}
          </h1>
          <h1 className="text-center text-[16px] font-[400] text-[#272626]">
            Done - {notCompletedTasks}
          </h1>
        </div>
        <ul className="flex flex-col gap-5 mt-5 w-full">{renderTodos()}</ul>
      </div>
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
