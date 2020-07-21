import React, { Fragment, useState } from "react";
import { ReactComponent as NewTabIcon } from "../../../icons/newtab.svg";
import { withRouter } from "react-router-dom";
import "./Person.scss";
import Modal from "../../Modal/Modal";
import AddUser from '../../AddUser/AddUser';

const Person = (props) => {
  const { people, history } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const redirectTopeopleDetail = (name) => {
    history.push("/people/" + name);
  };
 

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };
  const dismissable = () => {
    setIsModalOpen(false);
  };


  return (
    <Fragment>
      {people.map((person, index) => (
        <article key={index} className="person">
          <div className="personName icon">
            <span>{person.name}</span>
            <span
              className="icon-person personIcons"
              onClick={() => redirectTopeopleDetail(person.name)}
            >
              <NewTabIcon />
            </span>
          </div>
          <div className="personType">{person.role}</div>
        </article>
      ))}
      <article key={Math.random()} className="person">
          <div className="personName icon">
            <span className="add-user-span" onClick={handleModalOpen}>Add Existing User<br></br>
            to the Project</span>
          </div>
          
        </article>
        <Modal
          visible={isModalOpen}
          children={isModalOpen ? <AddUser dismiss={dismissable} /> : ""}
        />
    </Fragment>
  );
};

export default withRouter(Person);
