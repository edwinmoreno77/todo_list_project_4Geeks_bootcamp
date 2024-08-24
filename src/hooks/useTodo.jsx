import { useState } from "react";

export const useTodo = () => {
  const [todo, setTodo] = useState("");
  const [arrayTodo, setArrayTodo] = useState([]);
  const [isUpdating, setIsUpdating] = useState(null);

  const addTodo = (e) => {
    if (e.key == "Enter" && todo !== "") {
      setArrayTodo([...arrayTodo, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (todo) => {
    const newArrayTodos = arrayTodo.filter((item) => item !== todo);
    setArrayTodo(newArrayTodos);
  };

  return {
    addTodo,
    deleteTodo,
    todo,
    arrayTodo,
    setTodo,
    setArrayTodo,
    isUpdating,
    setIsUpdating,
  };
};
