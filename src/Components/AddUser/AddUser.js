import React, { useEffect, useState } from "react";
import { Form } from "react-final-form";
import "./AddUser.scss";
import { Button } from "react-bootstrap";
import { Grid } from "@material-ui/core";
import { Autocomplete } from "mui-rff";
import { ReactComponent as CloseIcon } from "../../icons/close.svg";

const AddUser = ({ dismiss }) => {
  const [isLoading, setLoading] = useState(false);
  let buttonDisable = true;
  const users = ["Vamsi Gamidi", "John Wick", "Jack Reacher", "Ethan Hunt", "Jack Sparrow"];

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
    if (!values.users) {
      errors.users = "Required";
    }

    buttonDisable = Object.keys(errors).length ? true : false;
    return errors;
  };

  const formFields = [
    {
      size: 6,
      field: (
        <Autocomplete
          label="Users"
          name="Users"
          required={true}
          options={users}
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

  const onSubmit = () => {
    setLoading(true);
  };

  return (
    <>
      <div className="addUserHeading">
          <div className="addUser">
        Add User to the Project
        </div>
        <span className="icon-button-close" onClick={dismiss}>
          <CloseIcon />
        </span>
      </div>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="addUserForm">
            <Grid container alignItems="flex-start" className="name-dropdown" spacing={2}>
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
                {isLoading ? "Add User...." : "Add User"}
              </Button>
              <Button onClick={dismiss}>Cancel</Button>
            </div>
          </form>
        )}
      />
    </>
  );
};

export default AddUser;
