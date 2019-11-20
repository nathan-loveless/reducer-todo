import React from 'react';
import Todo from './Todo';
import {todoList} from '../reducers/Reducers';

const TodoList=() => {

    return (
      <div className="todo-list">
          {todoList.map(todo => (
            <Todo todo={todo} />
          ))}
          <div><Todo /></div>
      </div>      
    );
  }

export default TodoList;