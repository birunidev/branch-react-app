import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Logout() {
  const [, setAuth, , setUser] = useAuth();

  const history = useHistory();

  useEffect(() => {
    setAuth(false);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
    history.push("/");
    return () => {};
  }, [history, setAuth, setUser]);

  return <div className="text-center my-4">Loging Out...</div>;
}
