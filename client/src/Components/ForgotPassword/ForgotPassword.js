import React, { useEffect, useState } from "react";
import { Form } from "react-final-form";
import { NavLink } from "react-router-dom";
import "../Form/Form.scss";
import { Button } from "react-bootstrap";
import { Grid } from "@material-ui/core";
import { TextField } from "mui-rff";

const ForgotPassword = ({ history }) => {
  const [isLoading, setLoading] = useState(false);
  let buttonDisable = true;

  useEffect(() => {
    if (isLoading) {
      request().then(() => {
        setLoading(false);
        history.push("/login");
      });
    }
  }, [isLoading]);

  const validEmailRegex = RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/
  );

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!validEmailRegex.test(values.email)) {
      errors.email = "Email is not valid!";
    }

    buttonDisable = Object.keys(errors).length ? true : false;
    return errors;
  };

  const formFields = [
    {
      size: 12,
      field: (
        <TextField
          type="email"
          label="Email"
          name="email"
          margin="none"
          required={true}
          variant="outlined"
        />
      ),
    },
  ];

  function request() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  const onSubmit = () => {
    setLoading(true);
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{
        email: "",
        password: "",
      }}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="formField">
          <Grid container alignItems="flex-start" spacing={2}>
            {formFields.map((item, id) => (
              <Grid item xs={item.size} key={id}>
                {item.field}
              </Grid>
            ))}
            <div className="buttons">
              <Button
                variant="primary"
                disabled={isLoading}
                type="submit"
                block
                disabled={buttonDisable}
              >
                {isLoading ? "SUBMIT...." : "SUBMIT"}
              </Button>
            </div>
          </Grid>
          <div className="message">
            Verification link will be sent to your email address
          </div>
          <NavLink to="/login" className="link">
            <p>Doesn't want to submit? Login here.</p>
          </NavLink>
        </form>
      )}
    />
  );
};

export default ForgotPassword;
