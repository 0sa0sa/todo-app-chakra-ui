import React, { useRef } from "react";
export const TodoAdd = ({ addTodoListItem }) => {
  const inputEl = useRef(null);
  const handleAddTodoListItem = () => {
    if (inputEl.current.value === "") return;
    addTodoListItem(inputEl.current.value);
    inputEl.current.value = "";
  };
  return (
    <>
      <textarea ref={inputEl} />
      <button onClick={handleAddTodoListItem}>+TODOを追加</button>
    </>
  );
};
