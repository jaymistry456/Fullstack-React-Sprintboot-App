import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../security/AuthProvider";

function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();
  const {login} = useAuth();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit() {
    if (login(username, password)) {
      navigate(`/welcome/${username}`);
    } else {
      setShowErrorMessage(true);
    }
  }

  return (
    <div className="Login">
      <h1>Login</h1>
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

export default LoginComponent;
