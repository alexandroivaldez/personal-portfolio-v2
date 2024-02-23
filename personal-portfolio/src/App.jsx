import { Icon } from "@iconify/react";
import chibiAlex from "./assets/chibi-alex.png";
import websiteImg from "./assets/website1.jpg";

import "./App.css";

function App() {
  return (
    <div>
      <nav className="flex w-screen items-center justify-between border border-red-400">
        <h1>AV</h1>
        <div className="flex border border-red-400">
          <p>Home</p>
          <p>Projects</p>
          <p>Work</p>
          <p>Contact</p>
        </div>
        <div className="flex border border-red-400">
          <Icon icon="pajamas:twitter" />
          <Icon icon="mdi:instagram" />
          <Icon icon="mdi:github" />
          <Icon icon="mdi:linkedin" />
        </div>
      </nav>
      <div className="flex">
        <div>
          <h1>Hi, I&apos;m <span>{`<AlexandroValdez />`}</span></h1>
          <p>I&apos;m a passionate full stack developer with an insatiable thirst for knowledge and a relentless drive to constantly expand my skills and expertise.</p>
          <button>View my work</button>
        </div>
        <img src={chibiAlex} alt="Art photo of a developer" width={'400px'} />
      </div>
      <div className="flex flex-col w-screen justify-center items-center m-auto border border-red-500">
        <p>My Projects</p>
        <Icon icon="material-symbols:arrow-drop-down" />
      </div>
      <div>
        <div className="flex border border-red-500">
          <img src={websiteImg} alt="Picture of a website." width={'400px'} />
          <h1>{`<DevLog />`}</h1>
          <p>I built this website to keep track of most of my development tasks. It was built using React, TypeScript, Tailwind, MongoDB, AWS Lambda, AWS CloudFront and API Gateway.</p> 
          <button>Live Demo</button>
        </div>
      </div>
    </div>
  );
}

export default App;
