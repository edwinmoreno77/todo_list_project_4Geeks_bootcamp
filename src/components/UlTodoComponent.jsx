import PropTypes from "prop-types";
import { useState } from "react";

export const UlTodoComponent = ({
  arrayTodo,
  deleteTodo,
  isUpdating,
  setIsUpdating,
  setArrayTodo,
}) => {
  const [inputUpdating, setInputUpdating] = useState("");

  const handleInput = (e, i) => {
    const updatedValue = e.target.value;
    setInputUpdating(updatedValue);

    const newArrayTodo = arrayTodo.map((todo, index) =>
      index === i ? updatedValue : todo
    );

    setArrayTodo(newArrayTodo);
  };

  return (
    <ul>
      {arrayTodo.map((item, i) => (
        <div key={i}>
          <div className="li_container">
            {isUpdating === i ? (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <input
                  type="text"
                  value={inputUpdating}
                  onChange={(e) => handleInput(e, i)}
                />
                <span onClick={() => setIsUpdating(null)}>done</span>
              </div>
            ) : (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <li>
                  {i + 1} - {item}
                </li>
                <div>
                  <span
                    onClick={() => {
                      setIsUpdating(i);
                      setInputUpdating(item);
                    }}
                  >
                    Edit
                  </span>
                  <span onClick={() => deleteTodo(item)}>x</span>
                </div>
              </div>
            )}
          </div>
          <hr />
        </div>
      ))}
    </ul>
  );
};

UlTodoComponent.propTypes = {
  arrayTodo: PropTypes.arrayOf(PropTypes.string).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  isUpdating: PropTypes.number,
  setIsUpdating: PropTypes.func.isRequired,
  setArrayTodo: PropTypes.func,
};
