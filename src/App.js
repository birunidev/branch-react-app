import { useEffect } from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { ProtectedRoute } from "./components";
import { setAuthorizationHeader } from "./configs/axios";
import useAuth from "./hooks/useAuth";
import { Branch, Home, Login, Logout } from "./pages";

function App() {
  const [, setAuth] = useAuth();
  useEffect(() => {
    let token = null;
    if (localStorage.getItem("token")) {
      token = JSON.parse(localStorage.getItem("token"));
      setAuthorizationHeader(token);
      setAuth(true);
    }
  }, [setAuth]);

  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute exact path="/branch" component={Branch} />
        <Route exact path="/" component={Home} />
        <Route exact path="/logout" component={Logout} />
      </Switch>
    </div>
  );
}

export default App;
