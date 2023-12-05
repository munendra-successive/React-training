import UserProfile from '../UserProfile'
import { render, screen } from "@testing-library/react";
test("Checking if props present or not", () => {
  const userDetails = {
    name: "Monu",
    email: "monu@gmail.com",
    phone: "9867463289",
  };
  render(<UserProfile {...userDetails}/>)
  expect(screen.getByText('User Details')).toBeInTheDocument();
  expect(screen.getByText('Name: Monu')).toBeInTheDocument();
  expect(screen.getByText('Email: monu@gmail.com')).toBeInTheDocument();
  expect(screen.getByText('Phone: 9867463289')).toBeInTheDocument();

});
