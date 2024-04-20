import { Icon } from "@iconify/react";
import union from "../assets/Union.png";

const Home = () => {
  return (
    <div className="flex border border-purple-500 w-[90%] h-screen justify-between ml-auto mr-auto">
      <div className="flex flex-col w-[50%] h-[800px] border border-red-500 gap-[15px] justify-center mt-[25px]">
        <h1 className="text-[32px]">Hello, I'm Alexandro Valdez</h1>
        <h1 className="text-[48px] font-bold">
          I focus on creating elegant digital solutions with an emphasis on
          functionality and design.
        </h1>
        <p className="text-[20px] w-[60%]">
          I’m a professional software developer based in TX. I specialize in
          full stack development, automation and UI/UX design.
        </p>
        <button className="bg-black text-white w-[220px] h-[80px] rounded-full">
          Lets Chat
        </button>
      </div>
      <img src={union} className="md:h-[600px] lg:h-[800px] w-auto mt-[25px] border border-red-500" />
    </div>
  );
};

export default Home;
