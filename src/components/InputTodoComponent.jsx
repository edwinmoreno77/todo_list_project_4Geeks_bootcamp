import PropTypes from "prop-types";

export const InputTodoComponent = ({ todo, arrayTodo, addTodo }) => {
  return (
    <input
      type="text"
      className="inputTodo_main"
      name="task"
      value={todo.task}
      placeholder={`${
        arrayTodo.length > 0
          ? "¿What needs to be done?"
          : "No tasks, add tasks."
      } `}
      onChange={(e) => addTodo(e)}
      onKeyDown={(e) => addTodo(e)}
    />
  );
};

InputTodoComponent.propTypes = {
  arrayTodo: PropTypes.arrayOf(PropTypes.object).isRequired,
  addTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
};
