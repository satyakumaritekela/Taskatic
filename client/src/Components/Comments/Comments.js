import React from "react";
import "./Comments.scss";
import { Button } from "react-bootstrap";

export const Comments = () => {
  return (
    <div className="comments-container">
      <div className="issueHeading">Comments</div>
      <div className="commentsTextArea">
        <textarea placeholder="Add a comment" rows="4"></textarea>
      </div>

      <div className="buttons">
        <Button>Add Comment</Button>
      </div>
    </div>
  );
};
