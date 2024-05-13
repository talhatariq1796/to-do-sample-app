"use client";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="flex-1 h-full flex flex-col p-10">
      <h2 className="text-[20px] mb-3 font-[600]">Add New Task</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full h-[60px] rounded-[10px] px-4 bg-transparent border outline-none border-gray-300 text-black hover:border-[#9E78CF] focus:border-[#9E78CF]"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full h-[300px] rounded-[10px] px-4  resize-none py-4 bg-transparent border outline-none border-gray-300 text-black hover:border-[#9E78CF] focus:border-[#9E78CF]"
        ></textarea>
        <div className="flex justify-end">
          <button
            type="submit"
            className="text-white bg-[#9E78CF] rounded-full outline-none font-medium text-sm w-auto px-5 py-2.5 text-center"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (title, description) => dispatch(addTodo(title, description)),
});

export default connect(null, mapDispatchToProps)(TodoForm);
