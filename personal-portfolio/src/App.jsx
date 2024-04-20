import { Icon } from "@iconify/react";
// import chibiAlex from "./assets/chibi-alex.svg";

import thumbnail from "./assets/website1.jpg";
import timeLineBar from "./assets/timeLineBar.png";

import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import RecentWork from "./components/RecentWork";
import Resume from "./components/Resume";
import LetsConnect from "./components/LetsConnect";

const App = () => {
  const scrollToSection = (passedSection) => {
    const targetSection = document.getElementById(`${passedSection}`);
    // Scroll to the target section smoothly
    targetSection.scrollIntoView({ behavior: "smooth" });
  };

  // <p onClick={() => scrollToSection("home-section")}>
  //   <span className="font-bold cursor-pointer">Home</span>
  // </p>;

  return (
    <div className="bg-white border border-red-500 flex flex-col">
      <NavBar />
      <Home />
      <RecentWork />
      <Resume />
      <LetsConnect />
    </div>
  );
};

export default App;
