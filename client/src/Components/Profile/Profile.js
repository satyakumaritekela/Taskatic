import React, { useState, useRef } from "react";
import { ReactComponent as DefaultProfileIcon } from "../../icons/defaultprofile.svg";
import { ReactComponent as TitleIcon } from "../../icons/title.svg";
import { ReactComponent as DepartmentIcon } from "../../icons/department.svg";
import { ReactComponent as OrganizationIcon } from "../../icons/organization.svg";
import { ReactComponent as LocationIcon } from "../../icons/location.svg";
import { ReactComponent as EmailIcon } from "../../icons/email.svg";
import "./Profile.scss";
import Editable from "../Editable/Editable";
import { Button } from "react-bootstrap";

const Profile = () => {
  const [jobTitle, setJobTitle] = useState("software Engineer");
  const titleRef = useRef();
  const [yourDepartment, setYourDepartment] = useState("R&D");
  const departmentRef = useRef();
  const [yourOrganization, setYourOrganization] = useState("ABC");
  const organizationRef = useRef();
  const [yourLocation, setYourLocation] = useState("Canada");
  const locationRef = useRef();
  const [email, setEmail] = useState("satyaitekela@gmail.com");
  const emailRef = useRef();

  return (
    <>
      <main className="ProfileManager">
        <header className="ProfileHeader">
          <span className="profile-icon">
            <DefaultProfileIcon />
          </span>
          <div className="profileName">Person Name</div>
        </header>
        <section className="AboutDetails">
          <div className="EditFields">
            <div className="EditField">
              <span className="icon-profile">
                <TitleIcon />
              </span>
              <Editable
                text={jobTitle}
                placeholder="Job Title"
                type="input"
                Ref={titleRef}
                className="EditableField"
              >
                <input
                  ref={titleRef}
                  type="text"
                  name="jobtitle"
                  placeholder="Job Title"
                  value={jobTitle}
                  className="PlaceholderField"
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </Editable>
            </div>
            <div className="EditField">
              <span className="icon-profile">
                <DepartmentIcon />
              </span>
              <Editable
                text={yourDepartment}
                placeholder="Your Department"
                type="input"
                Ref={departmentRef}
                className="EditableField"
              >
                <input
                  ref={departmentRef}
                  type="text"
                  name="yourdepartment"
                  placeholder="Your Department"
                  value={yourDepartment}
                  className="PlaceholderField"
                  onChange={(e) => setYourDepartment(e.target.value)}
                />
              </Editable>
            </div>
            <div className="EditField">
              <span className="icon-profile">
                <OrganizationIcon />
              </span>
              <Editable
                text={yourOrganization}
                placeholder="Your Organization"
                type="input"
                Ref={organizationRef}
                className="EditableField"
              >
                <input
                  ref={organizationRef}
                  type="text"
                  name="yourorganization"
                  placeholder="Your Organization"
                  value={yourOrganization}
                  className="PlaceholderField"
                  onChange={(e) => setYourOrganization(e.target.value)}
                />
              </Editable>
            </div>
            <div className="EditField">
              <span className="icon-profile">
                <LocationIcon />
              </span>
              <Editable
                text={yourLocation}
                placeholder="Your Location"
                type="input"
                Ref={locationRef}
                className="EditableField"
              >
                <input
                  ref={locationRef}
                  type="text"
                  name="yourlocation"
                  placeholder="Your Location"
                  value={yourLocation}
                  className="PlaceholderField"
                  onChange={(e) => setYourLocation(e.target.value)}
                />
              </Editable>
            </div>
            <div className="EditField">
              <span className="icon-profile">
                <EmailIcon />
              </span>
              <Editable
                text={email}
                placeholder="Email"
                type="input"
                Ref={emailRef}
                className="EditableField"
              >
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  className="PlaceholderField"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Editable>
            </div>
            <div className="buttons">
              <Button type="submit">Save Details</Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Profile;
