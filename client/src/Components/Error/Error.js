import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

const Error = ({ history }) => {
  useEffect(() => {
    history.push("/error");
  }, [history]);
  return <div>Error</div>;
};

export default withRouter(Error);
