import { Icon } from "@iconify/react";
import studySpaceThumbnail from "../assets/study-space.png";
import spreadingSeasThumbnail from "../assets/spread-seas.png";

const RecentWork = () => {
    return (
        <div className="w-[90%] h-screen border border-red-500 flex flex-col ml-auto mr-auto">
        <h1 className="text-[40px] font-bold">Recent Work</h1>
        <div className="border border-red-500 flex gap-1 justify-end p-2">
          <div className="bg-black rounded-full rotate-180">
            <Icon icon="material-symbols-light:play-arrow-outline" width={"24px"} color="white" />
          </div>
          <div className="bg-black rounded-full">
            <Icon icon="material-symbols-light:play-arrow-outline" width={"24px"} color="white"/>
          </div>
        </div>
        <div className="w-[100%] border border-blue-500 flex gap-[15px]">
          <div className="w-[50%] justify-start border border-green-500 flex flex-col">
            <img src={studySpaceThumbnail} className="border border-black w-auto h-[500px] rounded-2xl object-cover" />
            <h1 className="font-bold text-[32px]">StudySpace</h1>
            <p className="text-[24px]">
            Designed to support healthy study habits amongst high school and college students. Built using: React, Lambda, Cognito and DynamoDB
            </p>
          </div>
          <div className="w-[50%] justify-start border border-green-500 flex flex-col">
            <img src={spreadingSeasThumbnail} className="border border-black w-auto h-[500px] rounded-2xl object-cover" />
            <h1 className="font-bold text-[32px]">Spreading Seas</h1>
            <p className="text-[24px]">
              I grouped and lead team of international creatives to build a video game in 2 weeks for Pirate Software's Game Jam 14. In Spreading Seas you play as a pirate who fell down a booby trap after pushing his luck too far! The sea “spreads” beneath you as you try to jump your way out!
            </p>
          </div>
        </div>
      </div>
    )
}

export default RecentWork;