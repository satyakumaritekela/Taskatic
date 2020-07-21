import React from "react";
import Person from "./Person/Person";
import PeopleHeader from "./PeopleHeader/PeopleHeader";
import "./People.scss";
import ProjectDetail from "../Projects/ProjectDetail/ProjectDetail";

const peopleList = [
  { name: "People1", role: "Software Engineer" },
  { name: "People2", role: "Systems Engineer" },
  { name: "People3", role: "DevOps Enginner" },
  { name: "People4", role: "Data Scientist" },
];

const People = () => {
  return (
    <>
      <ProjectDetail>
        <main className="ProjectDetailMain">
          <PeopleHeader />
          <section className="peopleList">
            <Person people={peopleList} />
          </section>
        </main>
      </ProjectDetail>
    </>
  );
};

export default People;
