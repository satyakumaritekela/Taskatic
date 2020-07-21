import React, { useEffect, useState, useContext } from "react";
import { Form } from "react-final-form";
import "./CompleteSprint.scss";
import { Button } from "react-bootstrap";
import { Grid } from "@material-ui/core";
import { Autocomplete } from "mui-rff";
import { ReactComponent as CloseIcon } from "../../icons/close.svg";

const CompleteSprint = ({ dismiss }) => {
  const [isLoading, setLoading] = useState(false);
  let buttonDisable = true;
  const projects = ["Project1", "Project2"];

  useEffect(() => {
    if (isLoading) {
      request().then(() => {
        setLoading(false);
        dismiss();
      });
    }
  }, [isLoading]);

  const validate = (values) => {
    const errors = {};
    if (!values.types) {
      errors.projects = "Required";
    }
    buttonDisable = Object.keys(errors).length ? true : false;
    return errors;
  };

  const formFields = [
    {
      size: 6,
      field: (
        <Autocomplete
          label="Move to"
          name="types"
          required={true}
          options={projects}
          variant="outlined"
          getOptionValue={(option) => option}
          renderOption={(option) => <>{option}</>}
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
        Complete Sprint: Sprint Name
        <span className="icon-button-close" onClick={dismiss}>
          <CloseIcon />
        </span>
      </div>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="taskFormField">
            <div>
              <div>Issues to be completed</div>
            </div>
            <div>Select where the remaining issues to be moved: </div>
            <Grid container alignItems="flex-start" spacing={2}>
              {formFields.map((item, id) => (
                <Grid item xs={item.size} key={id}>
                  {item.field}
                </Grid>
              ))}
            </Grid>
            <div className="buttons">
              <Button
                disabled={isLoading}
                type="submit"
                disabled={buttonDisable}
              >
                {isLoading ? "Complete...." : "Complete"}
              </Button>
              <Button onClick={dismiss}>Cancel</Button>
            </div>
          </form>
        )}
      />
    </>
  );
};

export default CompleteSprint;
