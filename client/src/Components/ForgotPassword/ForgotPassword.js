import React, { useEffect, useState, useContext } from "react";
import { Form } from "react-final-form";
import { NavLink } from "react-router-dom";
import "../Form/Form.scss";
import { Grid } from "@material-ui/core";
import * as firebase from "firebase";
import { AuthContext } from "../../App";

import {
  TextField,
  Button,
  FormGroup,
  FormHelperText,
} from "@material-ui/core";
const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(" ");
  const [isLoading, setLoading] = useState(false);
  const [error, setErrors] = useState("");
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

  const validateEmailForm = () => {
    if (email.length === 0) {
      setEmailError("* email id cannot be empty");
    } else if (!validEmailRegex.test(email)) {
      setEmailError("* Email is not valid");
    } else {
      setEmailError("");
    }
  };

  function request() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  const handleResetSubmit = (event) => {
    event.preventDefault();
    if (emailError.length === 0) {
      event.preventDefault();
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then((res) => {
          console.log(res);
          if (res.user) {
            Auth.setLoggedIn(false);
            history.push("/home");
          }
        })
        .catch((event) => {
          setErrors(event.message);
        });
    } else {
      validateEmailForm();
    }
  };
  const Auth = useContext(AuthContext);
  return (
    <div class="container">
      <form className="formField">
        <FormHelperText id="my-helper-text">
          <p className="ErrorText">{error}</p>
        </FormHelperText>
        <FormGroup>
          <TextField
            id="emailInput"
            label="Email"
            variant="outlined"
            aria-describedby="my-helper-text"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
              validateEmailForm();
            }}
            className={emailError.length > 0 ? "errorTextField" : ""}
          />
          <FormHelperText id="my-helper-text">
            <p className="ErrorText">{emailError}</p>
          </FormHelperText>
        </FormGroup>
        <div className="buttons">
          <Button
            onClick={handleResetSubmit}
            variant="contained"
            color="primary"
          >
            Reset Password
          </Button>
        </div>
        <div className="message">
          Verification link will be sent to your email address
        </div>
        <NavLink to="/login" className="link">
          <p>Doesn't want to submit? Login here.</p>
        </NavLink>
      </form>
    </div>
  );
};

export default ForgotPassword;
