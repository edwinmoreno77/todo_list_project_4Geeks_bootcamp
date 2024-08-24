import { InputTodoComponent } from "./components/InputTodoComponent";
import { UlTodoComponent } from "./components/UlTodoComponent";
import { useTodo } from "./hooks/useTodo";
import "./App.css";

function App() {
  const { addTodo, arrayTodo, deleteTodo, setArrayTodo, setTodo, todo } =
    useTodo();

  return (
    <>
      <div className="container">
        <h1 className="title">Todo List</h1>
        <main className="container_todo">
          <div className="container_todo">
            <div className="container_todo">
              <section className="main_container">
                <article>
                  <InputTodoComponent
                    todo={todo}
                    arrayTodo={arrayTodo}
                    setTodo={setTodo}
                    setArrayTodo={setArrayTodo}
                    addTodo={addTodo}
                  />
                  <UlTodoComponent
                    deleteTodo={deleteTodo}
                    arrayTodo={arrayTodo}
                  />
                </article>
                <footer className="items">{arrayTodo.length} items</footer>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
