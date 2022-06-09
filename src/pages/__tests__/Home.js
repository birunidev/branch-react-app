import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider, { AuthContext } from "../../context/AuthProvider";
import Home from "../Home";

const Container = () => (
  <AuthProvider>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </AuthProvider>
);

test("it shows 2 text", () => {
  render(<Container />);
  expect(screen.getByTestId("welcome-text")).toHaveTextContent(
    "Welcome to my simple App"
  );
  expect(screen.getByTestId("authorized-text")).toHaveTextContent(
    "You are not authorized"
  );
});

test("it shows employee name if auth is true", () => {
  let user = { email: "birunidev@gmail.com", employeeName: "Al Biruni" };
  render(
    <AuthContext.Provider value={[true, , user]}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </AuthContext.Provider>
  );

  expect(screen.getByTestId("authorized-text")).toHaveTextContent(
    "You are logged in as Al Biruni"
  );
});
