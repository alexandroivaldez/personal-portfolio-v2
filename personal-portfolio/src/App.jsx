import { Icon } from "@iconify/react";
import chibiAlex from "./assets/chibi-alex.svg";
import websiteImg from "./assets/website1.jpg";

import "./App.css";

const App = () => {
  return (
    <div className="bg-[#131313]">
      <nav className="flex w-screen items-center justify-between bg-[#131313] text-white border border-red-400">
        <h1>AV</h1>
        <div className="flex justify-around items-center w-[400px] border border-red-400">
          <p>Home</p>
          <p>Projects</p>
          <p>Work</p>
          <p>Contact</p>
        </div>
        <div className="flex w-[100px] align-items justify-around border border-red-400">
          <Icon icon="pajamas:twitter" />
          <Icon icon="mdi:instagram" />
          <Icon icon="mdi:github" />
          <Icon icon="mdi:linkedin" />
        </div>
      </nav>
      <div className="flex bg-[#131313] text-white w-screen justify-center border border-green-500 mt-[100px]">
        <div className="flex flex-col justify-center border border-red-500">
          <h1 className="text-[30px]">
            Hi, I&apos;m <span>{`<AlexandroValdez />`}</span>
          </h1>
          <p className="w-[400px] flex justify-center ml-auto mr-auto">
            I&apos;m a passionate full stack developer with an insatiable thirst
            for knowledge and a relentless drive to constantly expand my skills
            and expertise.
          </p>
          <button className="border border-black bg-[#513AF5] w-[200px]">View my work</button>
        </div>
        <img src={chibiAlex} alt="Art photo of a developer"  className=" w-[40%] border-red-400"/>
      </div>
      <div className="flex flex-col w-screen justify-center items-center m-auto bg-[#131313] text-white border border-red-500">
        <p>My Projects</p>
        <Icon icon="material-symbols:arrow-drop-down" />
      </div>
      <div className="flex flex-col w-screen border border-purple-500">
        <div className="flex border border-orange-500 w-[1000px] justify-center ml-auto mr-auto">
          <img src={websiteImg} alt="Picture of a website." width={"400px"} />
          <div className="flex flex-col">
            <h1>{`<DevLog />`}</h1>
            <p>
              I built this website to keep track of most of my development
              tasks. It was built using React, TypeScript, Tailwind, MongoDB,
              AWS Lambda, AWS CloudFront and API Gateway.
            </p>
            <button>Live Demo</button>
          </div>
        </div>
        <div className="flex border border-orange-500 w-[1000px] justify-center ml-auto mr-auto">
          <div className="flex flex-col">
            <h1>{`<DevLog />`}</h1>
            <p>
              I built this website to keep track of most of my development
              tasks. It was built using React, TypeScript, Tailwind, MongoDB,
              AWS Lambda, AWS CloudFront and API Gateway.
            </p>
            <button className="border border-black">Live Demo</button>
          </div>
          <img src={websiteImg} alt="Picture of a website." width={"400px"} />
        </div>
      </div>
    </div>
  );
}

export default App;
