import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, onDelete, onToggle, onEdit }) => {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p> no tasks yet ! add one above.</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
