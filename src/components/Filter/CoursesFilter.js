import React, { useState } from "react";
import "./CoursesFilter.css";

const CoursesFilter = (props) => {
  const [searchText, setSearchText] = useState("");
  const [selector, setSelector] = useState("");
  const [beginner, setBeginner] = useState(false);
  const [inter, setInter] = useState(false);
  const [advanced, setAdvanced] = useState(false);
  const [expert, setExpert] = useState(false);

  const searchBoxHandler = (event) => {
    console.log(beginner, inter, advanced, expert);
    event.preventDefault();
    props.onSearch(searchText, selector, beginner, inter, advanced, expert);
  };

  return (
    <div className="filterNav">
      <form onSubmit={searchBoxHandler}>
        <input
          placeholder="Search Here"
          className="search-box"
          type="text"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        ></input>
        <br />
        <br />
        <label className="author-label">Authors</label>
        <br />
        <select
          className="author-select"
          value={selector}
          onChange={(event) => setSelector(event.target.value)}
        >
          <option>Select an Author</option>
          {props.courses.map((item) => (
            <option key={Math.random()}>{item.teacher}</option>
          ))}
        </select>
        <br />
        <br />
        <label className="checkbox-label">Beginner</label>
        <input
          type="checkbox"
          value={beginner}
          onChange={() => setBeginner(!beginner)}
        ></input>
        <br></br>
        <label className="checkbox-label">Intermediate</label>
        <input
          type="checkbox"
          value={inter}
          onChange={() => setInter(!inter)}
        ></input>
        <br></br>
        <label className="checkbox-label">Advanced</label>
        <input
          type="checkbox"
          value={advanced}
          onChange={() => setAdvanced(!advanced)}
        ></input>
        <br></br>
        <label className="checkbox-label">Expert</label>
        <input
          type="checkbox"
          value={expert}
          onChange={() => setExpert(!expert)}
        ></input>
        <br></br>
        <button className="search-box__button">Search</button>
      </form>
    </div>
  );
};

export default CoursesFilter;
