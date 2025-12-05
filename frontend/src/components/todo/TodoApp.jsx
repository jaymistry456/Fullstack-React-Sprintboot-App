import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HeaderComponent from "./header/HeaderComponent";
import FooterComponent from "./footer/FooterComponent";
import WelcomeComponent from "./welcome/WelcomeComponent";
import LoginComponent from "./login/LoginComponent";
import LogoutComponent from "./logout/LogoutComponent";
import ListTodosComponent from "./list-todos/ListTodosComponent";
import ErrorComponent from "./error/ErrorComponent";

import "./TodoApp.css";
import AuthProvider, { useAuth } from "./security/AuthProvider";

function AuthenticatedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/"></Navigate>;
  }

  return children;
}

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent></HeaderComponent>
          <Routes>
            <Route path="/" element={<LoginComponent />}></Route>
            <Route
              path="/login"
              element={<LoginComponent />}
            ></Route>
            <Route
              path="/welcome/:username"
              element={
                <AuthenticatedRoute>
                  <WelcomeComponent />
                </AuthenticatedRoute>
              }
            ></Route>
            <Route
              path="/todos"
              element={
                <AuthenticatedRoute>
                  <ListTodosComponent />
                </AuthenticatedRoute>
              }
            ></Route>
            <Route
              path="/logout"
              element={
                <AuthenticatedRoute>
                  <LogoutComponent />
                </AuthenticatedRoute>
              }
            ></Route>
            <Route path="*" element={<ErrorComponent></ErrorComponent>}></Route>
          </Routes>
          <FooterComponent></FooterComponent>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
