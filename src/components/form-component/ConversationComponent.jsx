import React from "react";
import { GoHistory } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import rohit from "../../assets/rohit.png";
import virat from "../../assets/virat.png";
import { SlEnvolope } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { PiSmiley } from "react-icons/pi";
import { IoMdAttach } from "react-icons/io";

const profileComments = [
  {
    profilePic: virat,
    name: "Virat Kohli",
    via: "via messaging",
    time: "Less than a minute ago",
    comment: "Hi, i just learn cricket from you",
  },
  {
    profilePic: rohit,
    name: "Rohit Sharma",
    via: "via messaging",
    time: "Just now",
    comment: "You are the god of cricket",
  },
];

const ConversationComponent = () => {
  return (
    <div className="h-full">
      <div className="top flex justify-between py-2 px-4 border-b">
        <div>
          <p className="font-bold text-md mb-1">
            Conversation With Sachin Tendulkar
          </p>
          <span className="text-xs">Via Messaging</span>
        </div>
        <div className="flex justify-center items-center gap-4">
          <GoHistory size={15} />
          <BsThreeDotsVertical size={15} />
        </div>
      </div>
      <div className="h-1/2 w-full comments-section border-b">
        {profileComments.map((item) => (
          <div className="w-full flex p-2 gap-2 justify-center items-center">
            <div className="profile">
              <img
                src={item.profilePic}
                alt={`${item.name}`}
                className="w-16 h-16"
              />
            </div>
            <div className="comments">
              <div className="flex justify-between">
                <div className="font-bold">
                  {item.name}{" "}
                  <span className="ml-2 text-xs font-semibold f-color">
                    {item.via}
                  </span>
                </div>
                <div className="text-xs font-semibold f-color">{item.time}</div>
              </div>
              <p className="text-sm">{item.comment}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="px-4 py-2  h-2/5">
        <div className="flex h-1/2 gap-2 justify-left items-start">
          <SlEnvolope size={20} />
          <div className="flex justify-center items-center">
            <p className="text-semibold mr-1">Messaging</p>
            <IoIosArrowDown />
          </div>
        </div>  
        <div className="flex gap-4 h-1/5 justify-left items-start">
          <PiSmiley size={20} />
          <IoMdAttach />
        </div>
      </div>
    </div>
  );
};

export default ConversationComponent;
