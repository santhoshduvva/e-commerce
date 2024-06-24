import React from "react";
import Main from "./components/Header/Menu.jsx";
import Copyright from "./components/Footer/Copyright.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="pageContainer">
      <Main />
      <Copyright />
    </div>
  );
};

export default App;
