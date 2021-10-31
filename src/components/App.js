import React, { useState } from "react";
import { useTodo } from "../hooks/useTodo";

import { TodoTitle } from "./TodoTitle";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

function App() {
  const {
    todoList,
    addTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem,
  } = useTodo();
  const [todo, setTodo] = useState("");

  const onChangeText = (e) => {
    setTodo(e.target.value);
  };

  console.log("TODOリスト:", todoList);

  const inCompletedList = todoList.filter((todo) => !todo.done);
  const CompletedList = todoList.filter((todo) => todo.done);
  return (
    <>
      <TodoTitle title="TODO進捗管理" as="h1" />
      <textarea onChange={onChangeText} />
      <TodoAdd addTodoListItem={addTodoListItem} />
      <TodoList
        title="未完了TODOリスト"
        as="h2"
        todoList={inCompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
      />
      <TodoList
        title="完了TODOリスト"
        as="h2"
        todoList={CompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
      />
    </>
  );
}

export default App;
