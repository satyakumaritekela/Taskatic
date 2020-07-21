import React, { useState } from "react";
import "./InviteUser.scss";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

export const InviteUser = () => {
  //Used React Hook for managing state
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  //Regular Expressions to validate the Email ID and Password
  const EmailRegex = RegExp(
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
  );

  //Using history to navigate to other pages
  const history = useHistory();
  //Handlers for inputs
  const handleEmail = (e) => {
    e.preventDefault();
    if (!EmailRegex.test(e.target.value)) {
      setEmailError("Please Enter a valid email");
    } else {
      setEmailError("");
    }
    setEmail(e.target.value);
  };

  //Handler for invite button
  const handleInviteUser = (e) => {
    e.preventDefault();
    if (EmailRegex.test(email)) {
      setEmailError("");
      history.push("/people");
    } else {
      setEmailError("Please Enter a valid email");
    }
  };

  return (
    <section className="add-user-section">
      <section className="container add-user-container">
        <section className="form-container">
          <section className="add-user-form">
            <h3>Invite User</h3>
            <form>
              <section className="form-group input-element">
                <input
                  type="text"
                  className="form-control"
                  onChange={handleEmail}
                  placeholder="Email ID"
                  required
                />
              </section>
              <div className="buttons">
                <Button onClick={handleInviteUser}>Invite</Button>
              </div>
              <section className="form-group">
                <p className="user-error">{emailError}</p>
              </section>
            </form>
          </section>
        </section>
      </section>
    </section>
  );
};
