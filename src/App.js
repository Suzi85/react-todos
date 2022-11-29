import './App.css';

import TodoTable from './components/TodoTable';

function App() {
  const todos = [

    { rowNumber: 1, rowDescription: 'Feed the cat', rowAssigned: 'Jack' },
    { rowNumber: 2, rowDescription: 'Call the office', rowAssigned: 'Jack' },
    { rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'Eric' },
    { rowNumber: 4, rowDescription: 'Jogging', rowAssigned: 'Jack' },
  ]
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos} />

        </div>
      </div>

    </div >
  );
}

export default App;
