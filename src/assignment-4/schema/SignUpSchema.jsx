import * as yup from "yup";

export const SignUpSchema = yup.object({
  name: yup.string().min(3).max(25).required("Please Enter your name"),
  pass: yup.string().min(8).required("Enter correct Password"),
  email: yup
    .string()
    .email()
    .required("Please Enter your email")
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email"
    ),
  confirmpassword: yup
    .string()
    .required()
    .oneOf([yup.ref("pass"), null, "Password must Match"]),
});
