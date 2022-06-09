import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import AuthProvider from "../../context/AuthProvider";
import Login from "../Login";
import { act } from "react-dom/test-utils";


test("show a 2 input tag and 1 button correctly", async () => {
  render(
    <AuthProvider>
      <Login />
    </AuthProvider>
  );

  expect(screen.getAllByTestId("input-username")).toBeDefined();
  expect(screen.getAllByTestId("input-password")).toBeDefined();
  expect(screen.getAllByTestId("btn-submit")).toBeDefined();
});

test("show correct input value when user enter the text", async () => {
  render(
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
  let data = { username: "birunidev", password: "12345678" };
  const usernameInput = screen.getByPlaceholderText("Username");
  const passwordInput = screen.getByPlaceholderText("Password");
  await act(async () => {
    fireEvent.change(usernameInput, { target: { value: data.username } });
    fireEvent.change(passwordInput, { target: { value: data.password } });
  });

  expect(usernameInput).toHaveValue(data.username);
  expect(passwordInput).toHaveValue(data.password);
});

test(`show error messages when user does not enter any value`, async () => {
  render(
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
  const usernameError = screen.getByTestId("username-error");
  const passwordError = screen.getByTestId("password-error");

  const usernameInput = screen.getByPlaceholderText("Username");
  const passwordInput = screen.getByPlaceholderText("Password");

  const btnSubmit = screen.getByTestId("btn-submit");

  await act(async () => {
    fireEvent.click(btnSubmit);
  });

  expect(usernameError).toHaveTextContent("username is a required field");
  expect(passwordError).toHaveTextContent("password is a required field");

  await act(async () => {
    fireEvent.change(usernameInput, { target: { value: "something" } });
    fireEvent.change(passwordInput, { target: { value: "something" } });
  });

  expect(usernameError).toHaveTextContent("");
  expect(passwordError).toHaveTextContent("");
});
