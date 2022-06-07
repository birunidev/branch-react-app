import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      let user = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      setUser(user);
    }
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth, user, setUser]}>
      {children}
    </AuthContext.Provider>
  );
}
