function TodoRowItem(props) {


      return (

            <tr>
                  <th scope='row'>{props.rowNumber}</th>
                  <td>{props.rowDescription}</td>
                  <td>{props.rowAssigned}</td>
                  <td><button type="button" className="btn btn-danger" onClick={() => props.deleteTodo(props.rowNumber)}>delete</button></td>
            </tr>


      )
}
export default TodoRowItem;