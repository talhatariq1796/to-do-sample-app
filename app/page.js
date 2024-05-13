"use client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import TodoForm from "@/src/components/TodoForm";
import TodoList from "@/src/components/TodoList";
import todoReducer from "@/src/redux/reducers";

const store = createStore(todoReducer);
export default function Home() {
  return (
    <Provider store={store}>
      <div className="w-full h-screen">
        <div className="w-full h-[10vh] bg-[#F6EFFF] border-b border-b-[#9E78CF] flex items-center px-6">
          <h1 className="text-[#222222] text-[24px] font-[700]">
            Welcome back, <span className="text-[#9E78CF]">Talha</span> 👋
          </h1>
        </div>
        <div className="flex w-full h-[90vh]">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </Provider>
  );
}
