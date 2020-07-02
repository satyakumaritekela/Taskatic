import React, { useEffect, useState } from "react";
import { Form } from "react-final-form";
import { Button } from "react-bootstrap";
import { Grid } from "@material-ui/core";
import { TextField } from "mui-rff";
import { ReactComponent as CloseIcon } from "../../../icons/close.svg";
import "./CreateProject.scss";

const CreateProject = ({ dismiss }) => {
  const [isLoading, setLoading] = useState(false);
  let buttonDisable = true;

  useEffect(() => {
    if (isLoading) {
      request().then(() => {
        setLoading(false);
        dismiss();
      });
    }
  }, [dismiss, isLoading]);

  const validate = (values) => {
    const errors = {};
    if (!values.projectname) {
      errors.projectname = "Required";
    }
    if (!values.key) {
      errors.key = "Required";
    }
    if (!values.projecttype) {
      errors.projecttype = "Required";
    }

    buttonDisable = Object.keys(errors).length ? true : false;
    return errors;
  };

  const formFields = [
    {
      size: 12,
      field: (
        <TextField
          type="text"
          label="Project Name"
          name="projectname"
          margin="none"
          required={true}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
      ),
    },
    {
      size: 12,
      field: (
        <TextField
          type="text"
          label="Key"
          name="key"
          margin="none"
          required={true}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
      ),
    },
    {
      size: 12,
      field: (
        <TextField
          type="text"
          label="Project Type"
          name="projecttype"
          margin="none"
          required={true}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
      ),
    },
  ];

  function request() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  const onSubmit = (values) => {
    setLoading(true);
  };

  return (
    <>
      <div className="issueHeading">
        Create Project
        <span className="icon-button-close" onClick={dismiss}>
          <CloseIcon />
        </span>
      </div>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="taskFormField">
            <Grid container alignItems="flex-start" spacing={2}>
              {formFields.map((item, id) => (
                <Grid item xs={item.size} key={id}>
                  {item.field}
                </Grid>
              ))}
            </Grid>
            <div className="buttons">
              <Button
                disabled={isLoading || buttonDisable}
                type="submit"
              >
                {isLoading ? "Create Project...." : "Create Project"}
              </Button>
              <Button onClick={dismiss}>Cancel</Button>
            </div>
          </form>
        )}
      />
    </>
  );
};

export default CreateProject;
