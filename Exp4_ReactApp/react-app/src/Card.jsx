import React from "react";
import { NavLink } from "react-router-dom";
import web from "./images/gallery-1.jpg";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" title={props.title} alt={props.title} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              Algorithm's Description in a Simple and Understandable Manner...
            </p>
            <NavLink to="#" className="btn btn-primary">
              Visualize Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
