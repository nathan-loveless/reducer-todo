import React from 'react';
import '../components/Todo';
import './Todo.css';
import {todoList} from '../reducers/Reducers';

const Todo = () => {


    return (
      <div>
        {todoList.map(todo => (
          <div>{todo.item}</div>
        ))}
        
      </div>
    );
  }

export default Todo;