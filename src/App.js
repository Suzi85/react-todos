import './App.css';

import React, { useState } from 'react'

import NewTodoForm from './components/NewTodoForm';
import TodoTable from './components/TodoTable';

function App() {

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: 'Feed the cat', rowAssigned: 'Jack' },
    { rowNumber: 2, rowDescription: 'Call the office', rowAssigned: 'Jack' },
    { rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'Eric' },
    { rowNumber: 4, rowDescription: 'Jogging', rowAssigned: 'Jack' },
  ])

  const addTodo = (description, assigned) => {
    console.log('click')
    let rowNumber = 0;

    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    }
    else {
      rowNumber = 1;
    }
    const newTodoList = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned
    };
    setTodos(todos => [...todos, newTodoList]);
    console.log(todos);


  };


  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos} />
          <button type="button" className="btn btn-warning mt-3">Add</button>
          <NewTodoForm addTodo={addTodo} />
        </div>
      </div>

    </div >
  );
}

export default App;
