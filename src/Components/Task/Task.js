import React from "react";
import { ReactComponent as HighIcon } from "../../icons/high.svg";
import { ReactComponent as HighestIcon } from "../../icons/highest.svg";
import { ReactComponent as MediumIcon } from "../../icons/medium.svg";
import { ReactComponent as LowIcon } from "../../icons/low.svg";
import { ReactComponent as LowestIcon } from "../../icons/lowest.svg";
import { ReactComponent as AssigneeIcon } from "../../icons/assignee.svg";
import "./Task.scss";

const Task = (props) => {
  const priorityIcon = (type) => {
    switch (type) {
      case "Highest":
        return <HighestIcon />;
      case "HighIcon":
        return <HighIcon />;
      case "MediumIcon":
        return <MediumIcon />;
      case "LowIcon":
        return <LowIcon />;
      case "LowestIcon":
        return <LowestIcon />;
      default:
        return "";
    }
  };
  return (
    <>
      <div className="taskCard">
        <div>{props.taskSummary}</div>
        <div className="taskDetails">
          <div>
            {props.issueType}
            <span className="task-icon">
              {props.taskPriority ? priorityIcon(props.taskPriority) : ""}
            </span>
          </div>
          <div>
            <span className="task-icon assignee-icon">
              <AssigneeIcon />
              <div className="assignee-name">{props.assigneeName}</div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
