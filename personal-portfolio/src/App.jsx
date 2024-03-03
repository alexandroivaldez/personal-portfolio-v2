import { Icon } from "@iconify/react";
// import chibiAlex from "./assets/chibi-alex.svg";
import union from "./assets/Union.png";
import thumbnail from "./assets/website1.jpg";
import timeLineBar from "./assets/timeLineBar.png";

import "./App.css";

const App = () => {
  return (
    <div className="bg-white">
      <nav className="flex w-[100%] items-center justify-between bg-white p-[5px] text-black border border-red-400">
        <h1>{`<AV />`}</h1>
        <div className="flex justify-around items-center w-[400px] border border-red-400">
          <p>Home</p>
          <p>Work</p>
          <p>Resume</p>
          <p>Contact</p>
        </div>
        <div className="flex w-[100px] align-items justify-around border border-red-400">
          <a href="https://twitter.com/av_iex" target="_blank">
            <Icon icon="pajamas:twitter" />
          </a>
          <a href="https://www.instagram.com/av.iex/" target="_blank">
            <Icon icon="mdi:instagram" />
          </a>
          <a href="https://github.com/alexandroivaldez" target="_blank">
            <Icon icon="mdi:github" />
          </a>
          <a
            href="https://www.linkedin.com/in/alexandro-valdez/"
            target="_blank"
          >
            <Icon icon="mdi:linkedin" />
          </a>
        </div>
      </nav>
      <div className="flex bg-white text-white w-[100%] justify-center border border-green-500 mt-[50px]">
        <div className="flex flex-col text-black justify-center border border-red-500 w-[780px]">
          <h1 className="text-[33px] text-black">
            Hi, I&apos;m Alexandro Valdez.
          </h1>
          <p className=" text-[64px] flex justify-center">
            I focus on creating elegant digital solutions with an emphasis on
            functionality and design.
          </p>
          <p className="text-[24px]">
            I&apos;m a professional software developer based in TX. I specialize
            in full stack development, automation and UI/UX design.
          </p>
          <div className="flex justify-end p-[15px]">
            <button className="border text-white bg-black rounded-[50px] w-[220px] h-[80px]">
              View my work
            </button>
          </div>
        </div>
        <img
          src={union}
          alt="Art photo of a developer"
          className=" w-[400px]"
        />
      </div>
      <div className="flex flex-col w-[100%] justify-center items-center m-auto bg-white text-black border border-red-500">
        <h2 className="text-[40px]">Recent Work</h2>
      </div>
      <div>
        <div>
          <div>{`<`}</div>
          <div>{`>`}</div>
        </div>
        <div className="flex justify-center gap-[40px]">
          <div>
            <img
              src={thumbnail}
              alt="Image of website"
              className="w-[570px] rounded-[15px] border border-black"
            />
            <h3 className="text-[32px]">StudySpace</h3>
            <p className="w-[500px] text-[24px]">
              Im a professional software developer based in TX. I specialize in
              full stack development, automation and UI/UX design.
            </p>
          </div>
          <div>
            <img
              src={thumbnail}
              alt="Image of website"
              className="w-[570px] rounded-[15px] border border-black"
            />
            <h3 className="text-[32px]">StudySpace</h3>
            <p className="w-[600px] text-[24px]">
              Im a professional software developer based in TX. I specialize in
              full stack development, automation and UI/UX design.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[100%] justify-center items-center bg-white text-black border border-red-500">
        <h2 className="text-[40px]">Resume</h2>
      </div>
      <div className="border border-blue-400 flex">
        <div>
          <h3>Skills</h3>
          <p>Front-end: React, JavaScript, HTML</p>
          <p>Back-end: MongoDB, Node.js</p>
        </div>
        <div className="flex justify-center">
          <img src={timeLineBar} />
        </div>
        <div>
          <div>
            <h3>Software Developer</h3>
            <p>Meneses Law | Houston, Texas | 2023 - Present</p>
            <p>Im a professional software developer based in TX.
I specialize in full stack development, automation and UI/UX design.</p>
          </div>
          <div>
            <h3>Software Developer</h3>
            <p>Meneses Law | Houston, Texas | 2023 - Present</p>
            <p>Im a professional software developer based in TX.
I specialize in full stack development, automation and UI/UX design.</p>
          </div>
          <div>
            <h3>Software Developer</h3>
            <p>Meneses Law | Houston, Texas | 2023 - Present</p>
            <p>Im a professional software developer based in TX.
I specialize in full stack development, automation and UI/UX design.</p>
          </div>
          <div>
            <h3>Software Developer</h3>
            <p>Meneses Law | Houston, Texas | 2023 - Present</p>
            <p>Im a professional software developer based in TX.
I specialize in full stack development, automation and UI/UX design.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[100%] bg-white text-black border border-red-500">
        <h2 className="text-[40px]">Lets Connect</h2>
        <p>Please fill out the following form and I will get back to you shortly.</p>
        <form className="flex flex-col gap-[15px]">
          <input type="text" placeholder="Enter your name..." className="border border-black"/>
          <input type="text"  placeholder="Enter your email address..." className="border border-black"/>
          <input type="textarea"  placeholder="How can I help...?" className="border border-black"/>
          <submit>Submit</submit>
        </form>
      </div>
    </div>
  );
};

export default App;
