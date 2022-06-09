import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../../context/AuthProvider";
import Branch from "../Branch";

test("show table and title correctly", async () => {
  render(
    <AuthProvider>
      <BrowserRouter>
        <Branch />
      </BrowserRouter>
    </AuthProvider>
  );
  const titleText = screen.getByText("Data Branch");
  const tableComponent = screen.getByTestId("table-component");

  expect(titleText).toBeInTheDocument();
  expect(tableComponent).toBeInTheDocument();
});
