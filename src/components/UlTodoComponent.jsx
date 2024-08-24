import PropTypes from "prop-types";

export const UlTodoComponent = ({ arrayTodo, deleteTodo }) => {
  return (
    <ul>
      {arrayTodo.map((item, i) => {
        return (
          <div key={i}>
            <div className="li_container">
              <li>
                {i + 1} - {item}
              </li>
              <span onClick={() => deleteTodo(item)}>x</span>
            </div>
            <hr />
          </div>
        );
      })}
    </ul>
  );
};

UlTodoComponent.propTypes = {
  arrayTodo: PropTypes.arrayOf(PropTypes.string).isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
