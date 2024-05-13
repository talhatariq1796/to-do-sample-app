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
      <div className="flex h-full w-full">
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
}
