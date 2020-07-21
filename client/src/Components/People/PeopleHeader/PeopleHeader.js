import React from "react";
import { Button, Form } from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import "./PeopleHeader.scss";

const PeopleHeader = () => {
  const history = useHistory();
  const inviteUser = (e) => {
    e.preventDefault();
    history.push("/inviteUser")
  }
  return (
    <>
      <header className="peopleHeader">
        <div className="peopleHeading">People</div>
        <div className="buttons">
          <Button onClick={inviteUser}>Invite User</Button>
        </div>
      </header>
      <section>
        <Form className="peopleForm">
          <Form.Control type="text" placeholder="Search for person" />
        </Form>
      </section>
    </>
  );
};

export default PeopleHeader;
