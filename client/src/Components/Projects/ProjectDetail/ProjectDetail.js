/**
 * @author Satya Kumar Itekela <satya.itekela@dal.ca>
 */
import React from "react";
import ProjectDetailSideBar from "./ProjectDetailSideBar/ProjectDetailSideBar";
import "./ProjectDetail.scss";

const ProjectDetail = (props) => {
  return (
    <>
      <main className="ProjectDetail">
        <ProjectDetailSideBar />
        <>{props.children}</>
      </main>
    </>
  );
};

export default ProjectDetail;
