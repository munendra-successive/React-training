/*

13.install  Yup. Define a Yup validation schema for a more complex form. 
Include validation rules for fields like email, password, and phone number. 
Ensure that error messages are displayed for each validation rule.
Implement real-time validation feedback using Material-UI's TextField component.
Show validation errors as the user types, and clear the errors when the input is valid.(Use Formik as well)


*/

import { Button, FormControl, FormGroup, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import { SignUpSchema } from "./schema/SignUpSchema";

const initialValues = {
  name: "",
  pass: "",
  email: "",
  confirmpassword: "",
};
const QuestionThirteen = () => {
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignUpSchema,
      onSubmit: (action) => {
        action.resetForm();
      },
    });

  return (
    <>
      <h4>
        13.install Yup. Define a Yup validation schema for a more complex form.
        Include validation rules for fields like email, password, and phone
        number. Ensure that error messages are displayed for each validation
        rule. Implement real-time validation feedback using Material-UI's
        TextField component. Show validation errors as the user types, and clear
        the errors when the input is valid.(Use Formik as well)
      </h4>
      <FormGroup onSubmit={handleSubmit}>
        <FormControl>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <Box color={"red"}>
              <TextField
                id="outlined-basic"
                label="UserName"
                name="name"
                variant="outlined"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className="form-errors">{errors.name}</p>
              ) : null}
            </Box>
            <Box color={"red"}>
              <TextField
                id="outlined-basic"
                label="Password"
                name="pass"
                variant="outlined"
                value={values.pass}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {values.pass && errors.pass && touched.name ? (
                <p className="form-errors">{errors.pass}</p>
              ) : null}
            </Box>

            <Box color={"red"}>
              <TextField
                id="outlined-basic"
                label="Confirm Password"
                name="confirmpassword"
                variant="outlined"
                value={values.confpass}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {values.confirmpassword && errors.confirmpassword && touched.name ? (
                <p className="form-errors">{errors.confirmpassword}</p>
              ) : null}
            </Box>

            <Box color={"red"}>
              <TextField
                id="outlined-basic"
                label="Email"
                name="email"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {values.email && errors.email && touched.name ? (
                <p className="form-errors">{errors.email}</p>
              ) : null}
            </Box>
            <Button type="submit">submit</Button>
          </Box>
        </FormControl>
      </FormGroup>
    </>
  );
};

export default QuestionThirteen;
