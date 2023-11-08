/*


10.Create a form with Material-UI text fields and implement form validation. 
Ensure that error messages are displayed when the user enters invalid data.


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
const QuestionTen = () => {
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
        10.Create a form with Material-UI text fields and implement form
        validation. Ensure that error messages are displayed when the user
        enters invalid data.
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
            <Box>
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
            <Box>
              <TextField
                id="outlined-basic"
                label="Password"
                name="pass"
                variant="outlined"
                value={values.pass}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.pass && touched.name ? (
                <p className="form-errors">{errors.pass}</p>
              ) : null}
            </Box>

            <Box>
              <TextField
                id="outlined-basic"
                label="Confirm Password"
                name="confirmpassword"
                variant="outlined"
                value={values.confirmpassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Box>
            {errors.confirmpassword && touched.name ? (
              <p className="form-errors">{errors.confirmpassword}</p>
            ) : null}
            <Box>
              <TextField
                id="outlined-basic"
                label="EMail"
                name="email"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.name ? (
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

export default QuestionTen;
