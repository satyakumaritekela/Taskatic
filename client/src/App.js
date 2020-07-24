import React, { useState, useEffect, componentDidMount } from "react";
import { Router } from "react-router-dom";
import history from "./services/history";
import Routes from "./Routes";
import Navigationbar from "./Components/Navbar/Navbar";
import userContext from "./Context/userContext";
import tasksItemsContext from "./Context/tasksItemsContext";
import Task from "./Components/Task/Task";
import * as firebase from "firebase";
import firebaseConfig from "./firebase.config";
import { auth } from "firebase";

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
  const [user, setUser] = useState("");
  const [tasks, setTasks] = useState([
    {
      id: "1",
      content: <Task {...task} />,
    },
  ]);

  const componentDidMount = () => {
    auth.onAuthStateChanged((userAuth) => {
      console.log("Auth : ", userAuth);
      setUser(userAuth);
    });
  };
  function readSession() {
    const user = window.sessionStorage.getItem(
      `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
    );
    if (user) setLoggedIn(true);
  }
  useEffect(() => {
    readSession();
  }, []);
  useEffect(() => {
    if (window.location.pathname === "/error") {
      setIsNavbar(false);
    }
  }, []);

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
