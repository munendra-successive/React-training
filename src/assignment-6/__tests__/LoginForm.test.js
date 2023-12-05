import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "../LoginForm";
test("Testing Elements presence", () => {
  render(<LoginForm />);
  const usernameInput = screen.getByTestId("username");
  expect(usernameInput).toBeInTheDocument();
  const passwordInput = screen.getByTestId("password");
  expect(passwordInput).toBeInTheDocument();
  const submit = screen.getByTestId("submit");
  expect(submit).toBeInTheDocument();
});
test("Testing Input",()=>{
    render(<LoginForm />);
  const usernameInput = screen.getByTestId("username");
  const passwordInput = screen.getByTestId("password");
  const submit = screen.getByTestId("submit");
  fireEvent.change(usernameInput,{target:{value:"Monu"}})
  fireEvent.change(passwordInput,{target:{value:'Monu@123'}})
  fireEvent.click(submit)
  expect(screen.getByText("Log in Successful")).toBeInTheDocument() 
})