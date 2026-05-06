import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Read a book", completed: false },
  ]);
  const [inputText, setInputText] = useState("");

  const addTodo = () => {
    const trimmed = inputText.trim();
    if (!trimmed) return;
    const newTodo = {
      id: Date.now(),
      text: trimmed,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputText("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTodo();
  };

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="app-wrapper">
      <Header />
      <main className="app-main">
        <div className="add-todo-section">
          <input
            type="text"
            className="todo-input"
            placeholder="Add a new task..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="btn-add" onClick={addTodo}>
            + Add
          </button>
        </div>
        <div className="stats">
          <span>
            {todos.length} task{todos.length !== 1 ? "s" : ""}
          </span>
          <span>{completedCount} completed</span>
        </div>
        <ToDoList
          todos={todos}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
          onEdit={editTodo}
        />
      </main>
    </div>
  );
}

export default App;
