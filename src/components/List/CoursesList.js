import CourseListItem from "../UI/CourseListItem";

const CoursesList = (props) => {
  return (
    <div>
      {props.courses.map((course) => (
        <CourseListItem course={course} key={Math.random()}/>
      ))}
    </div>
  );
};
export default CoursesList;
