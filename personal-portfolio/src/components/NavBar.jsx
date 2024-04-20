import { Icon } from "@iconify/react";

const NavBar = () => {
  return (
    <nav className="border border-purple-500 w-[100%] flex justify-between p-2">
      <h1>AV</h1>
      <div className="flex gap-[50px]">
        <h1>Home</h1>
        <h1>Projects</h1>
        <h1>Work</h1>
        <h1>Contact</h1>
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
        <a href="https://www.linkedin.com/in/alexandro-valdez/" target="_blank">
          <Icon icon="mdi:linkedin" width={"24px"} />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
