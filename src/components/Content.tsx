import * as React from 'react';
import Button from 'antd/lib/button';
import { todo } from './App';
import './Content.css';

interface ContentProps {
  todos: todo[];
  onToggle(id: string): void;
  onDelete(id: string): void;
}

interface TodoItemProps {
  title: string;
  isActive: boolean;
  onToggle(): void;
  onDelete(): void;
}

const Content: React.SFC<ContentProps> = ({ todos, onDelete, onToggle }) => {
  const todoItems = todos.map(todo => (
    <TodoItem
      title={todo.title}
      isActive={todo.done}
      onToggle={() => onToggle(todo.id)}
      onDelete={() => onDelete(todo.id)}
    />
  ));
  return <div className="content">{todoItems}</div>;
};

const TodoItem: React.SFC<TodoItemProps> = ({
  title,
  isActive,
  onToggle,
  onDelete,
}) => (
  <div className="todo-container">
    <input type="checkbox" className="todo-cb" checked={isActive} onClick={onToggle} />
    <div className="todo-title-container">
      <span className={isActive ? 'todo-title' : 'todo-title-active'}>{title}</span>
    </div>
    <div className="todo-delete-container">
      <Button onClick={onDelete} type="primary">Delete</Button>
    </div>
  </div>
);

export default Content;
