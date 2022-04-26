import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Topbar />
    </div>
  );
}

export default App;

