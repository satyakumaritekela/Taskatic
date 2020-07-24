import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import * as firebase from "firebase";
import { AuthContext } from "../../App";

import {
  TextField,
  Button,
  FormGroup,
  FormHelperText,
} from "@material-ui/core";
const Register = ({ history, registerShow }) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(" ");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(" ");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(" ");
  const validPasswordRegex = RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/);
  const [error, setErrors] = useState("");

  const validatePasswordForm = () => {
    if (password.length === 0) {
      setPasswordError("* password cannot be empty");
    } else if (!validPasswordRegex.test(password)) {
      setPasswordError("* password is weak");
    } else {
      setPasswordError("");
    }
  };
  const validateConfirmPasswordForm = () => {
    if (confirmPassword.length === 0) {
      setConfirmPasswordError("* Confirm password cannot be empty");
    }
    // else if (confirmPassword !== password) {
    //   setConfirmPasswordError("* passwords doesn't match");
    // }
    else {
      setConfirmPasswordError("");
    }
  };

  const validEmailRegex = RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,})+$/
  );
  const validateEmailForm = () => {
    debugger;
    if (email.length === 0) {
      setEmailError("* email id cannot be empty");
    } else if (!validEmailRegex.test(email)) {
      setEmailError("* Email is not valid");
    } else {
      setEmailError("");
    }
  };
  const validateNameForm = () => {
    if (name.length === 0) {
      setNameError("* Name cannot be empty");
    } else {
      setNameError("");
    }
  };

  const Auth = useContext(AuthContext);
  const handleForm = (e) => {
    if (
      nameError.length === 0 &&
      confirmPasswordError.length === 0 &&
      emailError.length === 0 &&
      passwordError.length === 0
    ) {
      e.preventDefault();
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          var user = firebase.auth().currentUser;
          user
            .updateProfile({
              displayName: name,
            })
            .then(function () {
              alert("Sign up is successful, please login");
            })
            .catch(function (error) {
              // An error happened.
            });

          if (res.user) {
            Auth.setLoggedIn(false);
            registerShow(false);
            history.push("/login");
          }
        })
        .catch((e) => {
          setErrors(e.message);
        });
    } else {
      validateEmailForm();
      validatePasswordForm();
      validateNameForm();
      validateConfirmPasswordForm();
    }
  };

  return (
    <div className="Register">
      <form onSubmit={(e) => handleForm(e)}>
        <FormHelperText id="my-helper-text">
          <p className="ErrorText">{error}</p>
        </FormHelperText>
        <FormGroup>
          <TextField
            id="nameInput"
            label="Name"
            variant="outlined"
            aria-describedby="my-helper-text"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError("");
              validateNameForm();
            }}
          />
          <FormHelperText id="my-helper-text">
            <p className="ErrorText">{nameError}</p>
          </FormHelperText>
        </FormGroup>
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
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
              validatePasswordForm();
            }}
          />
          <FormHelperText id="my-helper-text">
            <p className="ErrorText">{passwordError}</p>
          </FormHelperText>
        </FormGroup>
        <FormGroup>
          <TextField
            id="confirmPasswordInput"
            label="Confirm Password"
            variant="outlined"
            aria-describedby="my-helper-text"
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setConfirmPasswordError("");
              validateConfirmPasswordForm();
            }}
          />
          <FormHelperText id="my-helper-text">
            <p className="ErrorText">{confirmPasswordError}</p>
          </FormHelperText>
        </FormGroup>
        <Button variant="contained" color="primary" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};
export default withRouter(Register);
