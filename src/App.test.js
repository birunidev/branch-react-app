import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthProvider from "./context/AuthProvider";

test("renders learn react link", () => {
  render(
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  );
  const linkElement = screen.getByText("Welcome to my simple App");
  expect(linkElement).toBeInTheDocument();
});
