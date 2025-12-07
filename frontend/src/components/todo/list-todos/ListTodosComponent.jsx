import { useEffect, useState } from "react";
import {
  retrieveAllTodosForUsernameApi,
  deleteTodoApi,
} from "../api/TodoApiService";
import { useAuth } from "../security/AuthProvider";
import { useNavigate } from "react-router-dom";

function ListTodosComponent() {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);
  const { username } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const response = await retrieveAllTodosForUsernameApi(username);
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await deleteTodoApi(username, id);
      setMessage(`Deletion of Todo with id: ${id} is successful.`);
      loadTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const updateTodo = (id) => {
    navigate(`/todo/${id}`);
  };

  const addNewTodo = () => {
    navigate('/todo/-1');
  }

  return (
    <div className="container">
      <h1>Things You Want To Do!</h1>
      {message && <div className="alert alert-warning">{message}</div>}
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Is Done?</th>
              <th>Target Date</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toString()}</td>
                <td>
                  <div
                    className="btn btn-primary"
                    onClick={() => updateTodo(todo.id)}
                  >
                    Update
                  </div>
                </td>
                <td>
                  <div
                    className="btn btn-warning"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="btn btn-success m-5"  onClick={addNewTodo}>Add New Todo</div>
    </div>
  );
}

export default ListTodosComponent;
