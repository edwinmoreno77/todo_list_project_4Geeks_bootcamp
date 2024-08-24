import PropTypes from "prop-types";

export const InputTodoComponent = ({ todo, arrayTodo, setTodo, addTodo }) => {
  return (
    <input
      type="text"
      className="inputTodo_main"
      name="todo"
      placeholder={`${
        arrayTodo.length > 0
          ? "¿What needs to be done?"
          : "No tasks, add tasks."
      } `}
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      onKeyDown={(e) => addTodo(e)}
    />
  );
};

InputTodoComponent.propTypes = {
  todo: PropTypes.string.isRequired,
  arrayTodo: PropTypes.arrayOf(PropTypes.string).isRequired,
  setTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
};
