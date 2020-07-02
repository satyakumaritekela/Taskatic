import React, { useState, useContext, useEffect } from "react";
import SocialMedia from "../SignUp/SocialMedia";
import userContext from "../../Context/userContext";
import { withRouter } from "react-router-dom";

import {
  TextField,
  Button,
  FormGroup,
  FormHelperText,
} from "@material-ui/core";
import "./Login.css";
import NewUser from "./NewUser";
const Login = ({ history, loginShow }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(" ");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(" ");

  const {setUser } = useContext(userContext);

  useEffect(() => {
    setUser("");
  }, [setUser]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailError.length === 0 && passwordError.length === 0) {
      setUser("asd");
      loginShow(false);
      history.push("/home");
    } else {
      validateEmailForm();
      validatePasswordForm();
    }
  };

  const validEmailRegex = RegExp(
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/
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

  const validatePasswordForm = () => {
    if (password.length === 0) {
      setPasswordError("* password cannot be empty");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="LoginHomePage">
      <div>
        <NewUser />
      </div>
      <div className="Login row">
        <p className="Title">Log In</p>
        <form>
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
          <FormGroup>
            <TextField
              id="passwordInput"
              label="Password"
              variant="outlined"
              aria-describedby="my-helper-text"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
                validatePasswordForm();
              }}
              type="password"
            />
            <FormHelperText id="my-helper-text">
              <p className="ErrorText">{passwordError}</p>
            </FormHelperText>
          </FormGroup>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Login
          </Button>
          <br></br>
          <br></br>
          <FormGroup>
            <Button color="primary">
              Forgot Password?
            </Button>
          </FormGroup>
        </form>
        <br></br>
        <div className="LoginBottom">
          <p className="NormalText">or Login with </p>
          <div>
            <SocialMedia />
          </div>
        </div>
        <p className="SignUpLink">
          Don't have an account? <Button color="primary">Sign Up</Button>
        </p>
      </div>
    </div>
  );
};
export default withRouter(Login);
