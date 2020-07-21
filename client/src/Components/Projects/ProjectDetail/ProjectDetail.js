import React from "react";
import ProjectDetailSideBar from "./ProjectDetailSideBar/ProjectDetailSideBar";
import ProjectDetailMain from "./ProjectDetailMain/ProjectDetailMain";
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
