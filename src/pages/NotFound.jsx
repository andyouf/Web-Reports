import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";
const NotFound = () => {
  return (
    <>
      <div className="face">
        <div className="band">
          <div className="red"></div>
          <div className="white"></div>
          <div className="blue"></div>
        </div>
        <div className="eyes"></div>
        <div className="dimples"></div>
        <div className="mouth"></div>
      </div>

      <h1 className="whoops">Oops! Something went wrong!</h1>
      <div className="d-flex justify-content-center mt-3">
        <Link to="/">Return to Home</Link>
      </div>
    </>
  );
};
export default NotFound;
