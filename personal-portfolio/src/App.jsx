import { Icon } from "@iconify/react";
// import chibiAlex from "./assets/chibi-alex.svg";
import union from "./assets/Union.png";
import thumbnail from "./assets/website1.jpg";
import timeLineBar from "./assets/timeLineBar.png";
import studySpaceThumbnail from "./assets/study-space.png";
import spreadingSeasThumbnail from "./assets/spread-seas.png";

import "./App.css";

const App = () => {
  const scrollToSection = (passedSection) => {
    const targetSection = document.getElementById(`${passedSection}`);
    // Scroll to the target section smoothly
    targetSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white">
      <nav
        id="home-section"
        className="flex w-[100%] items-center justify-between bg-white p-[5px] text-black text-[20px]"
      >
        <h1>{`<AV />`}</h1>
        <div className="flex justify-around items-center w-[400px]">
          <p onClick={() => scrollToSection("home-section")}>
            <span className="font-bold cursor-pointer">Home</span>
          </p>
          <p
            onClick={() => scrollToSection("work-section")}
            className="cursor-pointer"
          >
            Work
          </p>
          <p
            onClick={() => scrollToSection("resume-section")}
            className="cursor-pointer"
          >
            Resume
          </p>
          <p
            onClick={() => scrollToSection("contact-section")}
            className="cursor-pointer"
          >
            Contact
          </p>
        </div>
        <div className="flex align-items justify-around gap-[20px]">
          <a href="https://twitter.com/av_iex" target="_blank">
            <Icon icon="pajamas:twitter" width={"24px"} />
          </a>
          <a href="https://www.instagram.com/av.iex/" target="_blank">
            <Icon icon="mdi:instagram" width={"24px"} />
          </a>
          <a href="https://github.com/alexandroivaldez" target="_blank">
            <Icon icon="mdi:github" width={"24px"} />
          </a>
          <a
            href="https://www.linkedin.com/in/alexandro-valdez/"
            target="_blank"
          >
            <Icon icon="mdi:linkedin" width={"24px"} />
          </a>
        </div>
      </nav>
      <div className="w-[100%] h-screen">
        <div className="flex bg-white text-white w-[100%] ml-auto mr-auto justify-center mt-[50px] gap-[300px]">
          <div className="flex flex-col text-black justify-center w-[780px]">
            <h1 className="text-[32px] text-black">
              Hello, I&apos;m Alexandro Valdez.
            </h1>
            <p className=" text-[64px] flex justify-center font-bold">
              I focus on creating elegant digital solutions with an emphasis on
              functionality and design.
            </p>
            <p className="text-[24px]">
              I&apos;m a professional software developer based in Houston, Tx. I
              specialize in full stack development, automation and UI/UX design.
            </p>
            <div className="flex mt-[50px]">
              <button
                onClick={() => scrollToSection("target-section")}
                className="border text-[20px] text-white bg-black rounded-[50px] w-[220px] h-[80px]"
              >
                Let&apos;s chat
              </button>
            </div>
          </div>
          <img
            src={union}
            alt="Art photo of a developer"
            className=" w-[550px]"
          />
        </div>
      </div>
      <div className="flex flex-col w-[100%] justify-center items-center m-auto bg-white text-black border border-red-500">
        <h2 id="work-section" className="text-[40px]">
          Recent Work
        </h2>
      </div>
      <div className="h-screen border-orange-800">
        <div className="border border-purple-800 flex w-[1150px] justify-end items-center m-auto">
          <div className="border border-red-500 bg-black rounded-[50px] w-[25px] h-[25px] justify-center items-center text-white p-[5px]">{`<`}</div>
          <div className="border border-red-500 bg-black rounded-[50px] w-[25px] h-[25px] justify-center items-center text-white p-[5px]">{`>`}</div>
        </div>
        <div className="flex justify-center gap-[40px]">
          <div className="flex flex-col gap-[5px]">
            <img
              src={spreadingSeasThumbnail}
              alt="Image of website"
              className="w-[680px] h-[480px] rounded-[15px] border border-black object-cover"
            />
            <h3 className="text-[32px] font-bold">Spreading Seas</h3>
            <p className="w-[600px] text-[24px]">
              This was my first time leading an international team. I reached
              out to individuals from different countries to create a 2D game
              for Pirate Software's Game Jam 14. In Spreading Seas you play as a
              pirate who fell down a booby trap after pushing his luck too far!
              The sea “spreads” beneath you as you try to jump your way out!
            </p>
            <button
              onClick={() => scrollToSection("target-section")}
              className="border text-[20px] text-white bg-black rounded-[50px] w-[220px] h-[80px]"
            >
              <a
                href="https://antennegg.itch.io/spreading-seas"
                target="_blank"
              >
                Live Demo
              </a>
            </button>
          </div>
          <div>
            <img
              src={studySpaceThumbnail}
              alt="Image of website"
              className="w-[680px] h-[480px] rounded-[15px] border border-black object-cover"
            />
            <h3 className="text-[32px] font-bold">StudySpace</h3>
            <p className="w-[600px] text-[24px]">
              This was designed to support healthy study habits amongst high
              school students. StudySpace offers a dedicated 'study space' that
              features a variety of useful widgets. These widgets include: a
              widget for playing lo-fi music, a Pomodoro timer to manage the
              study/break ratio, a to-do list for task management and sticky
              notes for quick note taking.
            </p>
            <button
              onClick={() => scrollToSection("target-section")}
              className="border text-[20px] text-white bg-black rounded-[50px] w-[220px] h-[80px]"
            >
              <a href="https://study-space-av.netlify.app/" target="_blank">
                Live Demo
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[100%] bg-white text-black border border-red-500">
        <h2 id="resume-section" className="text-[40px]">
          Resume
        </h2>
      </div>
      <div className="border border-purple-400 flex justify-center h-screen w-[100%]">
        <div className="w-[50%]">
          <h3>Skills</h3>
          <p>
            <span className="font-bold">Front-end:</span> React, JavaScript,
            HTML
          </p>
          <p>
            <span className="font-bold">Back-end:</span> MongoDB, Node.js
          </p>
          <p>
            <span className="font-bold">Middle-ware:</span> Express, Axios
          </p>
          <p>
            <span className="font-bold">Styling:</span> Tailwind, CSS
          </p>
          <p>
            <span className="font-bold">Automation:</span> Puppeteer
          </p>
          <p>
            <span className="font-bold">Cloud Services:</span> AWS, Azure
          </p>
          <p>
            <span className="font-bold">Testing:</span> SonarQube
          </p>
          <p>
            <span className="font-bold">UI/UX:</span> Figma
          </p>
          <div>
            <h2>Certifications</h2>
            <div>
              <h3>AWS Certified Cloud Practitioner</h3>
              <p>2023 - 2027 (View Cert)</p>
            </div>
            <div>
              <h3>GitHub Foundations Certifications</h3>
              <p>2023 - 2027 (View Cert)</p>
            </div>
            <div>
              <h3>MongoDB Associate Developer Certification</h3>
              <p>2023 - 2027 (View Cert)</p>
            </div>
          </div>
          <div>
            <h2>Download Full Resume</h2>
            <button
              onClick={() => scrollToSection("target-section")}
              className="border text-[20px] text-white bg-black rounded-[50px] w-[220px] h-[80px]"
            >
              <a href="https://study-space-av.netlify.app/" target="_blank">
                Download
              </a>
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={timeLineBar} />
        </div>
        <div className="w-[50%] flex flex-col gap-[185px]">
          <div>
            <h3>
              <span className="font-bold">Software Developer</span>
            </h3>
            <p>Meneses Law | Houston, Texas | 2023 - Present</p>
            <p>
              Im a professional software developer based in TX. I specialize in
              full stack development, automation and UI/UX design.
            </p>
          </div>
          <div>
            <h3>
              <span className="font-bold">Software Developer</span>
            </h3>
            <p>Meneses Law | Houston, Texas | 2023 - Present</p>
            <p>
              Im a professional software developer based in TX. I specialize in
              full stack development, automation and UI/UX design.
            </p>
          </div>
          <div>
            <h3>
              <span className="font-bold">Software Developer</span>
            </h3>
            <p>Meneses Law | Houston, Texas | 2023 - Present</p>
            <p>
              Im a professional software developer based in TX. I specialize in
              full stack development, automation and UI/UX design.
            </p>
          </div>
          <div>
            <h3>
              <span className="font-bold">Software Developer</span>
            </h3>
            <p>Meneses Law | Houston, Texas | 2023 - Present</p>
            <p>
              Im a professional software developer based in TX. I specialize in
              full stack development, automation and UI/UX design.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[100%] h-screen bg-white items-center text-black border border-red-500">
        <h2 id="contact-section" className="text-[40px] font-bold">
          Lets Connect
        </h2>
        <p className="text-[#8D8D8D]">
          Please fill out the following form and I will get back to you shortly.
        </p>
        <form className="flex flex-col gap-[15px] border border-red-500 w-[50%]">
          <input
            type="text"
            placeholder="Enter your name..."
            className="border border-black"
          />
          <input
            type="text"
            placeholder="Enter your email address..."
            className="border border-black"
          />
          <input
            type="text"
            placeholder="Enter your phone number..."
            className="border border-black"
          />
          <input
            type="textarea"
            placeholder="How can I help...?"
            className="border border-black h-[600px]"
          />
          <button
              onClick={() => scrollToSection("target-section")}
              className="border text-[20px] text-white bg-black rounded-[50px] w-[100%] h-[80px]"
            >
              <a href="https://study-space-av.netlify.app/" target="_blank">
                Submit
              </a>
            </button>
        </form>
        <footer className="flex">
          <p>Made with 🖤 by AV</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
