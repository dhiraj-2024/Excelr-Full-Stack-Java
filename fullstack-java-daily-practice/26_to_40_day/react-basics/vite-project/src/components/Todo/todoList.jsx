import React from "react";
import task from "../../api/todoData.json";
import { TodoCard } from "./todoCard";

export const TodoList = () => {
  return (
    <>
      <div className=" border-2 border-green-500 flex w-full flex-wrap p-5 h-auto justify-center items-center gap-5">
        {task.map((item) => {
          return <TodoCard key={item.id} bhai={item} />;
        })}
      </div>
    </>
  );
};
