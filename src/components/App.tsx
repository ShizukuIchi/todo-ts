import * as React from 'react';
import 'antd/lib/button/style/css';
import Button from 'antd/lib/button';

import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export interface todo {
  id: string;
  title: string;
  done: boolean;
}

export enum AppMode {
  all = 'all',
  finished = 'finished',
  unfinished = 'unfinished',
}

export interface AppState {
  todos: todo[];
  mode: AppMode;
  entering: string;
}

export default class App extends React.Component<object, AppState> {
  readonly state = {
    todos: [
      {
        id: '1',
        title: 'hi',
        done: false,
      },
      {
        id: '2',
        title: 'hello',
        done: false,
      },
    ],
    mode: AppMode.all,
    entering: '',
  };
  render() {
    const { entering, todos, mode } = this.state;
    return (
      <div className="wrapper">
        <div className="logo">Todo TS</div>
        <div className="container">
          <Header
            input={entering}
            onChange={this.onEnterChange}
            onEnter={this.onEnterPress}
          />
          <Content
            onDelete={this.onTodoDelete}
            onToggle={this.onTodoToggle}
            todos={filterTodos(todos, mode)}
          />
          <Footer
            onClick={this.onModeClick}
            currentMode={mode}  
          />
        </div>
      </div>
    );
  }
  public onTodoToggle = (id: string) => {
    const { todos } = this.state;
    const newTodos = [...todos];
    for (const todo of newTodos) {
      if (todo.id === id) {
        todo.done = !todo.done;
        break;
      }
    }
    this.setState({
      todos: [...newTodos],
    });
  }
  public onTodoDelete = (id: string) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id),
    });
  }
  public onEnterChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      entering: e.currentTarget.value,
    });
  }
  public onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.which === 13) {
      this.setState({
        todos: [
          ...this.state.todos,
          {
            id: new Date().toString() + new Date().getMilliseconds().toString(),
            title: this.state.entering,
            done: false,
          },
        ],
        entering: '',
      });
    }
  }
  public onModeClick = (mode: AppMode) => {
    this.setState({
      mode,
    });
  }
}

const filterTodos = (todos:todo[], mode: AppMode) => {
  switch (mode) {
    case AppMode.finished:
      return todos.filter(todo => todo.done);
    case AppMode.unfinished:
      return todos.filter(todo => !todo.done);
    default:
      return todos;
  }
};
