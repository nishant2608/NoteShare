import courses from "./Courses.json";
import "./CoursePanel.css";
function CoursePanel({ index }) {
  return (
    <div className="Panel">
      <div className="CoursePhoto"></div>
      <div className="CourseInfo">
        <div className="CourseHeading">{courses[index].name}</div>
        <div className="CourseDescription">{courses[index].Description}</div>
        {courses[index].Collaborators.map((item, key) => {
          return (
            <>
              <>{item} </>
              <> </>
            </>
          );
        })}
      </div>
    </div>
  );
}
export default CoursePanel;
