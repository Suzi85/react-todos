import TodoRowItem from './TodoRowItem'

function TodoTable(props) {
      return (
            <table class="table table-striped table-hover">
                  <thead>
                        <tr className="table-primary">
                              <th scope='col'>#</th>
                              <th scope='col'>Description</th>
                              <th scope='col'>Assigned</th>
                        </tr>
                  </thead>
                  <tbody>
                        {props.todos.map(todo => (
                              <TodoRowItem
                                    rowNumber={todo.rowNumber}
                                    rowDescription={todo.rowDescription}
                                    rowAssigned={todo.rowAssigned}
                              />
                        ))}

                  </tbody>

            </table>
      )
}
export default TodoTable;