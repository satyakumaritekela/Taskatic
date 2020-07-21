import React from "react";
import "./SocialMedia.css";
const facebookHandler = () => {
  console.log("Facebook sign in");
};
const googleHandler = () => {
  console.log("Google sign in");
};
const linkedInHandler = () => {
  console.log("LinkedIn sign in");
};
const SocialMedia = () => {
  return (
    <div>
      <div className="SocialMedia Facebook" onClick={facebookHandler}></div>
      <div className="SocialMedia LinkedIn" onClick={linkedInHandler}></div>
      <div className="SocialMedia Google" onClick={googleHandler}></div>
    </div>
  );
};
export default SocialMedia;
