/*

14.Create a new form and Implement form submission handling.
Ensure that the form cannot be submitted if there are validation errors.
Display a summary of errors if the user attempts to submit an invalid form.

*/

import { Button, FormControl, FormGroup, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import { SignUpSchema } from "./schema/SignUpSchema";
import { useEffect, useState } from "react";

const initialValues = {
  name: "",
  pass: "",
  email: "",
  confirmpassword: "",
};
const QuestionFourTeen = () => {
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignUpSchema,
      onSubmit: (values, action) => {
        action.resetForm();
      },
    });
const[isSubmit,setSubmit]=useState(true);
useEffect(()=>{
    if(Object.keys(errors).length>0){
        setSubmit(true)
    }
    else{
        setSubmit(false)
    }
},[errors])
  return (
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
            {errors.name && touched.name ? <p>{errors.name}</p> : null}
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
            {errors.pass && touched.name ? <p>{errors.pass}</p> : null}
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
          {errors.confirmpassword && touched.name ? <p>{errors.confirmpassword}</p> : null}
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
            {errors.email && touched.name ? <p>{errors.email}</p> : null}
          </Box>
          <Button type="submit" disabled={isSubmit}>
            submit
          </Button>
        </Box>
      </FormControl>
    </FormGroup>
  );
};

export default QuestionFourTeen;
