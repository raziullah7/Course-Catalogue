import React, { useState } from "react";

import coursesData from "./components/List/DataFile";
import "./App.css";
import Courses from "./components/List/Courses";

function App() {
  const [coursesPlaceholder] = useState(coursesData);
  let [duplicateCourses, setDuplicateCourses] = useState(coursesData);

  const onSearch = (
    searchText,
    selectedAuthor,
    beginnerBox,
    interBox,
    advancedBox,
    expertBox
  ) => {
    let filteredSearch = coursesPlaceholder.filter(
      (item) => {
        if (
          item.title.toUpperCase().includes(searchText.toUpperCase()) &&
          item.teacher.includes(selectedAuthor)
        ) {
          if (beginnerBox || interBox || advancedBox || expertBox) {
            return (
              (beginnerBox ? item.level === "beginner" : "") ||
              (interBox ? item.level === "intermediate" : "") ||
              (advancedBox ? item.level === "advanced" : "") ||
              (expertBox ? item.level === "expert" : "")
            );
          } else {
            return true;
          }
        } else {
          return false;
        }
      }
      // (item.title.toUpperCase().includes(searchText.toUpperCase()) &&
      // item.teacher.includes(selectedAuthor))
      // &&
    );

    setDuplicateCourses(filteredSearch);
  };

  return (
    <div className="App">
      <Courses onSearch={onSearch} courses={duplicateCourses} />
    </div>
  );
}

export default App;
