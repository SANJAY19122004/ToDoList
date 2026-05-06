import { useState } from "react";

const ToDoItem = ({ todo, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      if (editText.trim() !== "") {
        onEdit(todo.id, editText.trim());
      } else {
        setEditText(todo.text);
      }
    }
    setIsEditing(!isEditing);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleEdit();
    if (e.key === "Escape") {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
      />
      {isEditing ? (
        <input
          type="text"
          className="edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <span className={`todo-text ${todo.completed ? "strike" : ""}`}>
          {todo.text}
        </span>
      )}
      <div className="todo-actions">
        <button
          className={`btn-edit ${isEditing ? "btn-save" : ""}`}
          onClick={handleEdit}
          title={isEditing ? "Save" : "Edit"}
        >
          {isEditing ? "SAVE " : " EDIT "}
        </button>
        <button
          className="btn-delete"
          onClick={() => onDelete(todo.id)}
          title="Delete"
        >
          DELETE !
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
