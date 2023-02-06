import React from "react";
import Modal from "./components/Modal";
import Search from "./components/Search";
import Main from "./views/Main";
import MapPage from "./views/MapPage";
import MyPage from "./views/MyPage";
import Store from "./views/Store";
import Login from "./views/Login";
import Join from "./views/Join";
import Registration from "./views/Registration";
import { Route, Routes } from "react-router-dom";
import NotFound from "./views/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Main" element={<Main />} />
      <Route path="/MapPage" element={<MapPage />} />
      <Route path="/MyPage" element={<MyPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Join" element={<Join />} />
      <Route path="/Registration" element={<Registration />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
