import logo from "./logo.svg";
import "./App.css";
import CoursePanel from "./CoursePanel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CoursePanel index={0} />
        <CoursePanel index={1} />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
