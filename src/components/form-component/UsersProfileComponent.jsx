import React from "react";
import virat from "../../assets/virat.png";
import { GrFormEdit } from "react-icons/gr";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import { SlEnvolope } from "react-icons/sl";
import { FiTag } from "react-icons/fi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { Textarea } from '@chakra-ui/react'
import { CiFilter } from "react-icons/ci";
import { MdOutlineRefresh } from "react-icons/md";
import VerticalTimeline from "./VerticalTimeline";
import { LuUser2 } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { GoPlus } from "react-icons/go";

const UsersProfileComponent = () => {
    const [para, setPara] = React.useState('')

    const handleInputChange = (e) => {
      let inputValue = e.target.value
      setPara(inputValue)
    }
  return (
    <div className="h-full flex">
        <div className="profile-left">
        <div className="h-1/2 border-b px-4 py-2 ">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2 justify-center items-center">
            <img src={virat} alt="profile img" className="h-12 w-12" />
            <p className="text-bold">Virat Kohli</p>
          </div>
          <div className="flex justify-around gap-2 items-center">
            <GrFormEdit size={25} />
            <BsThreeDotsVertical size={15} />
            <IoIosArrowUp size={20} />
          </div>
        </div>
        <div className="flex gap-2 justify-left items-center mb-4">
          <SlEnvolope size={18} />
          <a
            href="https://www.instagram.com/virat.kohli/?hl=en"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            viratkohli18@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <FiTag size={20} />
          <div className="flex gap-2">
            <div className="border tag-bg px-2 text-xs">Straight Drive</div>
            <div className="border tag-bg px-2 text-xs">Cover Drive</div>
          </div>
        </div>
        <div className="flex gap-2">
        <HiOutlinePencilAlt size={20}/>
        <Textarea value={para} onChange={handleInputChange} size='sm' />
        </div>
      </div>

      <div className="h-1/2 px-4 py-2">
        <div className="flex justify-between items-center">
            <p className="text-md font-bold">Interactions</p>
            <div className="flex justify-center items-center gap-2">
            <CiFilter size={20}/>
            <MdOutlineRefresh size={20}/>
            <IoIosArrowUp size={20} />
            </div>
        </div>
        <VerticalTimeline />
      </div>
        </div>
        <div className="profile-right border px-2 flex flex-col  items-center">
        <div className="py-5">
        <LuUser2 size={20}/>
        </div>
        <div className="border-b-2 pb-2">

        <IoBookOutline  size={20}/>
        </div>
        <div className="py-5">

        <RxDashboard size={20} />
        </div>
        <GoPlus size={25} />
        </div>
    </div>
  );
};

export default UsersProfileComponent;
