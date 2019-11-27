import React/*, { useReducer }*/ from 'react';
import '../components/Todo';
import './Todo.css';
import { initialState } from '../reducers/Reducers';
import { TOGGLE_COMPLETED } from '../actions/ReducerActions';

const Todo = (props) => {

  //const [state, dispatch] = useReducer(todoReducer, todoList);


  let updatedClassCompletion = ' todo';
  console.log(props.state[0]);

  //props.state.item.map(item => (console.log(item)));

  if (props.todo.completed) {
    updatedClassCompletion += ' completed';
  }


  const handleClick = e => {
    e.preventDefault();
    props.dispatch({ type: TOGGLE_COMPLETED })
  };

  return (
    <>
      <div>
        <div onClick={handleClick} className={updatedClassCompletion}>
          <p>{props.todo.item}</p>
        </div>
      </div>
    </>
  );
}

export default Todo;