import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import MapPage from "./views/MapPage";
import Login from "./views/Login";
import Join from "./views/Join";
import Registration from "./views/Registration";
import MyPage from "./views/MyPage";

function App() {
  return (
    <div>
      <MapPage />
    </div>
  );
}

export default App;
