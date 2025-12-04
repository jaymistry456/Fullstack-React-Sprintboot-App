import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
  Link,
} from "react-router-dom";
import "./TodoApp.css";

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <HeaderComponent></HeaderComponent>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent></LoginComponent>}></Route>
          <Route
            path="/login"
            element={<LoginComponent></LoginComponent>}
          ></Route>
          <Route
            path="/welcome/:username"
            element={<WelcomeComponent></WelcomeComponent>}
          ></Route>
          <Route
            path="/todos"
            element={<ListTodosComponent></ListTodosComponent>}
          ></Route>
          <Route path="/logout" element={<LogoutComponent></LogoutComponent>}></Route>
          <Route path="*" element={<ErrorComponent></ErrorComponent>}></Route>
        </Routes>
      </BrowserRouter>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit() {
    if (username === "in28minutes" && password === "dummy") {
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      navigate(`/welcome/${username}`);
    } else {
      setShowSuccessMessage(false);
      setShowErrorMessage(true);
    }
  }

  return (
    <div className="Login">
      <h1>Login</h1>
      {showSuccessMessage && (
        <div className="successMessage">Authenticated Successfully</div>
      )}
      {showErrorMessage && (
        <div className="errorMessage">
          Authentication Failed! Please check your credentials.
        </div>
      )}
      <div className="LoginForm">
        <div>
          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          ></input>
        </div>
        <div>
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          ></input>
        </div>
        <div>
          <button type="button" name="login" onClick={handleSubmit}>
            login
          </button>
        </div>
      </div>
    </div>
  );
}

export function WelcomeComponent() {
  const { username } = useParams();
  return (
    <div className="WelcomeComponent">
      <h1>Welcome {username}</h1>
      <div>
        Manage your todos: <Link to="/todos">Todos</Link>
      </div>
    </div>
  );
}

export function ErrorComponent() {
  return (
    <div className="ErrorComponent">
      <h1>404 Not Found</h1>
    </div>
  );
}

function ListTodosComponent() {
  const today = new Date();

  const targetDate = new Date(
    today.getFullYear() + 12,
    today.getMonth(),
    today.getDay()
  );

  const todos = [
    { id: 1, description: "Learn AWS", done: false, targetDate: targetDate },
    {
      id: 2,
      description: "Learn Full Stack Dev",
      done: false,
      targetDate: targetDate,
    },
    { id: 3, description: "Learn DevOps", done: false, targetDate: targetDate },
  ];

  return (
    <div className="container">
      <h1>Things You Want To Do!</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <td>ID</td>
              <td>Description</td>
              <td>Is Done?</td>
              <td>Target Date</td>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function HeaderComponent() {
  return (
    <div className="header">
      <h1>Header</h1>
      <hr />
    </div>
  );
}


export function FooterComponent() {
  return (
    <div className="footer">
      <hr />
      <h1>Footer</h1>
    </div>
  );
}

export function LogoutComponent() {
  return (
    <div className="logout">
      <h1>You have logged out.</h1>
    </div>
  );
}