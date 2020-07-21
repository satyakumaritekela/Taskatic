import React, { useState } from "react";
import CompleteSprint from "../../../CompleteSprint/CompleteSprint";
import Modal from "../../../Modal/Modal";
import { Button } from "react-bootstrap";

const ProjectDetailHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };
  const dismissable = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="projectSprintHeader">
        <div className="projectSprintHeading">Sprint Name</div>
        <div className="buttons">
          <Button onClick={handleModalOpen}>Complete Sprint</Button>
        </div>
      </section>

      <Modal
        visible={isModalOpen}
        children={isModalOpen ? <CompleteSprint dismiss={dismissable} /> : ""}
      />
    </>
  );
};

export default ProjectDetailHeader;
