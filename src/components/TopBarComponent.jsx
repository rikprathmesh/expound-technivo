import React from "react";
import { FaPlus } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { CiChat1 } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { BiMessageAltX } from "react-icons/bi";
import { MdSpaceDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const TopBarComponent = () => {
  return (
    <div className="flex justify-between px-4 py-4 border">
      <div className="flex justify-center items-center">
        <FaPlus className="pr-1 text-dark" size={15} />
        Add
      </div>
      <div className="flex justify-evenly items-center gap-2">
        <div className="rounded-md px-4 py-4">
          <IoSearchOutline className="text-dark" size={20} />
        </div>
        <div className="rounded-md px-6 py-4 border bg-normalgray">
          <p className="text-dark text-sm">
            Chats{" "}
            <span className="ml-2 px-2 py-1 rounded-full border bg-drkgray text-white">
              0
            </span>
          </p>
        </div>
        <div className="rounded-md px-4 py-4 border">
          <CiChat1 className="text-dark" size={20} />
        </div>
        <div className="rounded-md px-4 py-4 border">
          <IoCallOutline className="text-dark" size={20} />
        </div>
        <div className="rounded-md px-4 py-4 border bg-drkgray">
          <MdOutlineDashboard className="text-white" size={20} />
        </div>
        <div className="rounded-md px-4 py-4 border bg-drkgray">
          <FaWhatsapp className="text-white" size={20} />
        </div>
        <div className="rounded-md px-4 py-4 border bg-drkgray">
          <BiMessageAltX className="text-white" size={20} />
        </div>
        <div className="rounded-md px-4 py-4">
          <MdSpaceDashboard size={25} />
        </div>
        <div className="rounded-md px-4 py-4">
          <CgProfile size={25} />
        </div>
      </div>
    </div>
  );
};

export default TopBarComponent;
