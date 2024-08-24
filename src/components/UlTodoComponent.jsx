import PropTypes from "prop-types";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faCircleCheck,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

export const UlTodoComponent = ({
  arrayTodo,
  deleteTodo,
  isUpdating,
  setIsUpdating,
  setArrayTodo,
}) => {
  const [inputUpdating, setInputUpdating] = useState({ task: "", done: false });

  const handleInput = (e, i) => {
    const updatedValue = e.target.value;

    setInputUpdating({ task: updatedValue, done: false });

    const newArrayTodo = arrayTodo.map((todo, index) =>
      index === i ? inputUpdating : todo
    );

    setArrayTodo(newArrayTodo);

    if (e.key === "Enter") {
      setIsUpdating(null);
    }
  };

  const hanldeDoneTodo = (i) => {
    const newArrayTodo = arrayTodo.map((todo, index) =>
      index === i ? { ...todo, done: !todo.done } : todo
    );
    setArrayTodo(newArrayTodo);
  };

  return (
    <ul>
      {arrayTodo.map((item, i) => (
        <div key={i}>
          <div className="li_container">
            {isUpdating === i ? (
              <div className="show_span option_container">
                <input
                  className="input_updating"
                  type="text"
                  value={inputUpdating.task}
                  onChange={(e) => handleInput(e, i)}
                  onKeyDown={(e) => handleInput(e, i)}
                />
                <span onClick={() => setIsUpdating(null)}>done</span>
              </div>
            ) : (
              <div className="option_container">
                <li onClick={() => hanldeDoneTodo(i)}>
                  {item.done ? (
                    <span>
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                  ) : (
                    <span>
                      <FontAwesomeIcon icon={faCircle} />
                    </span>
                  )}
                  {`  ${item.task}`}
                </li>
                <div className="show_span">
                  <span
                    onClick={() => {
                      setIsUpdating(i);
                      setInputUpdating(item);
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </span>
                  <span onClick={() => deleteTodo(item)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </span>
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
  arrayTodo: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  isUpdating: PropTypes.number,
  setIsUpdating: PropTypes.func.isRequired,
  setArrayTodo: PropTypes.func,
};
