import React, { useState, useContext, useEffect } from "react";
import SocialMedia from "../SignUp/SocialMedia";
import userContext from "../../Context/userContext";
import { ReactComponent as CloseIcon } from "../../icons/close.svg";
import { withRouter } from "react-router-dom";
import * as firebase from "firebase";
import { AuthContext } from "../../App";

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
  const [error, setErrors] = useState("");
  const { user, setUser } = useContext(userContext);

  useEffect(() => {
    setUser("");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailError.length === 0 && passwordError.length === 0) {
      event.preventDefault();
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res);
          if (res.user) {
            Auth.setLoggedIn(true);
            setUser("asd");
            loginShow(false);
            history.push("/home");
          }
        })
        .catch((event) => {
          setErrors(event.message);
        });
    } else {
      validateEmailForm();
      validatePasswordForm();
    }
  };

  const validEmailRegex = RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/
  );

  const validPasswordRegex = RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/);

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
  const Auth = useContext(AuthContext);
  return (
    <div className="LoginHomePage">
      <div>
        <NewUser />
      </div>
      <div className="Login row">
        <p className="Title">Log In</p>
        <form>
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
            <a href="forgotPassword">Forgot Password?</a>
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
          Dont have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
};
export default withRouter(Login);
