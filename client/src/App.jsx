import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
//?----------------------------------------- components
import LandingPage from "./components/landingPage/LandingPage";
import Home from "./components/home/Home";
import Detail from "./components/detail/Detail";
import Nav from "./components/navBar/Nav";
import ActivityCreator from "./components/activityCreator/ActivityCreator";
//?----------------------------------------- style
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <main className={`App ${location.pathname === "/" ? "landing" : "other"}`}>
      {location.pathname !== "/" ? <Nav></Nav> : ""}
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route className="other" path="/home" element={<Home></Home>}></Route>
        <Route path="/detail/:id" element={<Detail></Detail>}></Route>
        <Route
          path="/create"
          element={<ActivityCreator></ActivityCreator>}
        ></Route>
      </Routes>
    </main>
  );
}

export default App;
