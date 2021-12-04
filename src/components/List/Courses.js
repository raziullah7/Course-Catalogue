import CoursesList from "./CoursesList";
import CoursesFilter from "../Filter/CoursesFilter";
import "./Courses.css";

const Courses = (props) => {
  return (
    <div className="courses-page">
      <CoursesFilter courses={props.courses} onSearch={props.onSearch} />
      <CoursesList courses={props.courses} />
    </div>
  );
};
export default Courses;
