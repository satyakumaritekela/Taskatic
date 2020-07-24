import React, { useState, useEffect } from "react";
import { Router } from "react-router-dom";
import history from "./services/history";
import Routes from "./Routes";
import Navigationbar from "./Components/Navbar/Navbar";
import userContext from "./Context/userContext";
import tasksItemsContext from "./Context/tasksItemsContext";
import Task from "./Components/Task/Task";
import * as firebase from "firebase";
import firebaseConfig from "./firebase.config";

const task = {
  projectName: "project1",
  issueType: "Bug",
  taskSummary: "Bug1",
  assigneeName: "Max",
  taskPriority: "highest",
};

firebase.initializeApp(firebaseConfig);
export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isNavbar, setIsNavbar] = useState(true);
  const [user, setUser] = useState("user");
  const [tasks, setTasks] = useState([
    {
      id: "1",
      content: <Task {...task} />,
    },
  ]);

  useEffect(() => {
    if (window.location.pathname === "/error") {
      setIsNavbar(false);
    }
  }, []);
  console.log("####firebase obj ", firebase);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      <Router history={history}>
        <userContext.Provider value={{ user, setUser }}>
          <tasksItemsContext.Provider value={{ tasks, setTasks }}>
            {isNavbar ? <Navigationbar /> : ""}
            <Routes />
          </tasksItemsContext.Provider>
        </userContext.Provider>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
