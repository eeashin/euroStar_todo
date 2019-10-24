

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoList: [] };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/todos")
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        this.setState({
          todoList: Object.values(responseData)
        });
      });
  }
  
  render() {
    const total = this.state.todoList.length;
    let complete = this.state.todoList.filter(c => c.completed === true);
    let todos = this.state.todoList
      .sort((a, b) => b.id - a.id)
      .map(todo => (
        <tr key={todo.id}>
          <td>{todo.title}</td>
        </tr>
      ));

    return (
      <div className="container">
        <div className="card text-center">
          <h1 className="header">Eurostar Todo</h1>
          <div className="card-body">
            <h5 className="subheader">Total number of todo items = {total}</h5>
            <h5 className="subheader">
              Completed todo items = {complete.length}
            </h5>
          </div>
        </div>
        <div>
          <table className="table table-striped">
            <tbody>
              <tr>
                <th>List of Todo Items</th>
              </tr>
              {todos}
            </tbody>
          </table>
        </div>
        <div className="card text-center">
          <div className="card-footer text-muted">
            <p>&copy; Eashin Matubber | eashin@gmail.com </p>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TodoList />, document.getElementById("root"));
