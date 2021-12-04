import React from "react";

import "./CourseListItem.css";

const CourseListItem = (props) => {
  return (
    <div className="list-item">
      <div>
        <img src={props.course["img-url"]} alt=""></img>
      </div>
      <div>
        <h3>{props.course.title}</h3>
        <p>{props.course.description}</p>
        <p>{props.course.teacher}</p>
        <div>
          <p className="side-by-side">•{props.course.rating} rating</p>
          <p className="side-by-side">•{props.course.duration} total</p>
        </div>
        <br></br>
        <div>
          <p className="side-by-side">•126 Lectures</p>
          <p className="side-by-side">•{props.course.level} Level</p>
        </div>
      </div>
    </div>
  );
};

export default CourseListItem;
