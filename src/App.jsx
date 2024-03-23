// Backend API endpoint: https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import CafeList from "./components/CafeList/CafeList";

export default function App() {
  // const cafes = [];

  // React hooks for states
const [cafes, setCafes] = React.useState([]);
// setCafe is a function that changes the state for example: setCafes([..., ...])

React.useEffect(() => {
  const url = "https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes";
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setCafes(data);
  });
}, []);

console.log("app yet renderd");
  return (
    <div className="app-frame">
<Navbar setCafes={setCafes} />
<div className="app-body">
  <Sidebar />
  <CafeList cafes={cafes} />
</div>
</div>
  );
}
