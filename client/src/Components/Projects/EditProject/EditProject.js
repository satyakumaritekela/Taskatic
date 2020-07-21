import React, { useState, useRef, useEffect } from "react";
import Editable from "../../Editable/Editable";
import { ReactComponent as CloseIcon } from "../../../icons/close.svg";
import { Button } from "react-bootstrap";
import "./EditProject.scss";

const EditProject = ({ dismiss }) => {
  const [isLoading, setLoading] = useState(false);
  const [projectName, setProjectName] = useState("Project1");
  const projectNameRef = useRef();
  const [projectKey, setProjectKey] = useState("Pr");
  const projectKeyRef = useRef();
  const [projectType, setProjectType] = useState("Classic");
  const projectTypeRef = useRef();
  let buttonDisable = true;

  useEffect(() => {
    if (isLoading) {
      request().then(() => {
        setLoading(false);
        dismiss();
      });
    }
  }, [isLoading]);

  function request() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  return (
    <>
      <div className="issueHeading">
        Edit Project
        <span className="icon-button-close" onClick={dismiss}>
          <CloseIcon />
        </span>
      </div>
      <main className="ProjectManager">
        <section className="AboutDetails">
          <div className="EditFields">
            <div className="EditField">
              <Editable
                text={projectName}
                placeholder="Project Name"
                type="input"
                Ref={projectNameRef}
                className="EditableField"
              >
                <input
                  ref={projectNameRef}
                  type="text"
                  name="projectname"
                  placeholder="Project Name"
                  value={projectName}
                  className="PlaceholderField"
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </Editable>
            </div>
            <div className="EditField">
              <Editable
                text={projectKey}
                placeholder="Project Key"
                type="input"
                Ref={projectKeyRef}
                className="EditableField"
              >
                <input
                  ref={projectKeyRef}
                  type="text"
                  name="projectkey"
                  placeholder="Project Key"
                  value={projectKey}
                  className="PlaceholderField"
                  onChange={(e) => setProjectKey(e.target.value)}
                />
              </Editable>
            </div>
            <div className="EditField">
              <Editable
                text={projectType}
                placeholder="Project Type"
                type="input"
                Ref={projectTypeRef}
                className="EditableField"
              >
                <input
                  ref={projectTypeRef}
                  type="text"
                  name="projecttype"
                  placeholder="Project Type"
                  value={projectType}
                  className="PlaceholderField"
                  onChange={(e) => setProjectType(e.target.value)}
                />
              </Editable>
            </div>
          </div>
          <div className="buttons">
            <Button disabled={isLoading} type="submit" disabled={buttonDisable}>
              {isLoading ? "Save Details...." : "Save Details"}
            </Button>
            <Button onClick={dismiss}>Cancel</Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default EditProject;
