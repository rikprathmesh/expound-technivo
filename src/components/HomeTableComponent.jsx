import React, { useState } from "react";
import { MdOutlineRefresh } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import email from "../assets/icon-img/email.png";
import box from "../assets/icon-img/box.png";
import sms from "../assets/icon-img/sms.png";
import instantmsg from "../assets/icon-img/instant_message.png";
import call from "../assets/icon-img/call_outgoing.png";
import laptop from "../assets/icon-img/laptop.png";
import hammer from "../assets/icon-img/hammer.png";
import cart from "../assets/icon-img/shopping_cart.png";
import truck from "../assets/icon-img/truck.png";
import inquiry from "../assets/icon-img/stakeholder_analysis.png";
import social from "../assets/icon-img/demographic.png";
import wrench from "../assets/icon-img/wrench.png";
import bulb from "../assets/icon-img/light_bulb.png";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Checkbox,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const listArrya = [
  {
    icon: email,
    text: "Email Support Ticket",
    count: 45,
  },
  {
    icon: box,
    text: "Return Requests",
    count: 30,
  },
  {
    icon: sms,
    text: "SMS Support",
    count: 15,
  },
  {
    icon: instantmsg,
    text: "Live Chat Responses",
    count: 20,
  },
  {
    icon: call,
    text: "Phone Call Resolutions",
    count: 12,
  },
  {
    icon: laptop,
    text: "Online Form Submissions",
    count: 8,
  },
  {
    icon: hammer,
    text: "Technical Support Tickets",
    count: 25,
  },
  {
    icon: cart,
    text: "Order Issues",
    count: 18,
  },
  {
    icon: truck,
    text: "Delivery Problems",
    count: 10,
  },
  {
    icon: inquiry,
    text: "Inquiry Responses",
    count: 22,
  },
  {
    icon: social,
    text: "Social Media Comments",
    count: 50,
  },
  {
    icon: wrench,
    text: "Maintainance Requests",
    count: 7,
  },
  {
    icon: bulb,
    text: "Future Requests",
    count: 5,
  },
];

const data = [
  {
    id: "#1",
    subject: "Otto",
    channel: "@mdo",
    ticketForm: "@mdo",
    requester: "@mdo",
    requested: "@mdo",
    assignments: ["@mdo", "@mdo", "@mdo", "@mdo"],
  },
  {
    id: "#1",
    subject: "Otto",
    channel: "@mdo",
    ticketForm: "@mdo",
    requester: "@mdo",
    requested: "@mdo",
    assignments: ["@mdo", "@mdo", "@mdo", "@mdo"],
  },
  {
    id: "#1",
    subject: "Otto",
    channel: "@mdo",
    ticketForm: "@mdo",
    requester: "@mdo",
    requested: "@mdo",
    assignments: ["@mdo", "@mdo", "@mdo", "@mdo"],
  },
  {
    id: "#1",
    subject: "Otto",
    channel: "@mdo",
    ticketForm: "@mdo",
    requester: "@mdo",
    requested: "@mdo",
    assignments: ["@mdo", "@mdo", "@mdo", "@mdo"],
  },
  {
    id: "#1",
    subject: "Otto",
    channel: "@mdo",
    ticketForm: "@mdo",
    requester: "@mdo",
    requested: "@mdo",
    assignments: ["@mdo", "@mdo", "@mdo", "@mdo"],
  },
  {
    id: "#1",
    subject: "Otto",
    channel: "@mdo",
    ticketForm: "@mdo",
    requester: "@mdo",
    requested: "@mdo",
    assignments: ["@mdo", "@mdo", "@mdo", "@mdo"],
  },
  {
    id: "#1",
    subject: "Otto",
    channel: "@mdo",
    ticketForm: "@mdo",
    requester: "@mdo",
    requested: "@mdo",
    assignments: ["@mdo", "@mdo", "@mdo", "@mdo"],
  },
  {
    id: "#1",
    subject: "Otto",
    channel: "@mdo",
    ticketForm: "@mdo",
    requester: "@mdo",
    requested: "@mdo",
    assignments: ["@mdo", "@mdo", "@mdo", "@mdo"],
  },
  {
    id: "#1",
    subject: "Otto",
    channel: "@mdo",
    ticketForm: "@mdo",
    requester: "@mdo",
    requested: "@mdo",
    assignments: ["@mdo", "@mdo", "@mdo", "@mdo"],
  },
  {
    id: "#1",
    subject: "Otto",
    channel: "@mdo",
    ticketForm: "@mdo",
    requester: "@mdo",
    requested: "@mdo",
    assignments: ["@mdo", "@mdo", "@mdo", "@mdo"],
  },
  // Add more rows as needed
];

const HomeTableComponent = () => {

  const navigate = useNavigate()

  const handleUserDetails = (id) => {
    console.log(id, 'click');
    navigate("/user")
  }
  return (
    <div className="flex w-full table-container">
      <div className="w-1/3 p-2 border">
        <div className="flex justify-between view-section p-2 border-b-2">
          <p>Views</p>
          <div className="flex justify-center items-center gap-2">
            <MdOutlineRefresh size={20} />
            <MdKeyboardArrowLeft size={24} />
          </div>
        </div>
        <div className="list-section mt-2 border-b-2 pb-2 ">
          <div className="p-2">
            {listArrya.map((item) => (
              <div className="flex justify-between p-1">
                <div className="flex gap-1 icon-text">
                  <img
                    src={item.icon}
                    alt={`${item.name}`}
                    className="img-icon"
                  />
                  <p className="text-sm">{item.text}</p>
                </div>
                <div className="count text-sm">{item.count}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-between p-1">
            <div className="flex icon-text">
              <p className="text-sm">Suspended tickets</p>
            </div>
            <div className="count text-sm">0</div>
          </div>
          <div className="flex justify-between p-1">
            <div className="flex icon-text">
              <p className="text-sm">Deleted tickets</p>
            </div>
            <div className="count text-sm">22</div>
          </div>
        </div>
        <div className="flex gap-2 items-center mt-2">
          <p className="text-xs">More</p>
          <span>
            {" "}
            <MdOutlineKeyboardDoubleArrowRight size={17} />
          </span>
        </div>
      </div>
      <div className="border w-4/6 h-full p-2">
        <div className="flex justify-between">
          <div className="top-left">
            <div className="flex justify-center items-center gap-2">
              <img src={box} alt="box" className="h-8 w-8" />
              <p className="text-lg font-semibold">Returns</p>
            </div>
            <span className="text-xs light-color">21 tickets</span>
          </div>
          <div className="top-right flex justify-center items-center gap-2">
            <div className="px-3 py-2 rounded border">
              <p className="text-sm font-semibold light-color">Play</p>
            </div>
            <div className="p-2 border rounded">
              <IoIosArrowDown />
            </div>
          </div>
        </div>
        <Table variant="simple" className="mt-2">
      <Thead>
        <Tr className="table-header">
          <Th>
            <Checkbox size="sm" />
          </Th>
          <Th>ID</Th>
          <Th>Subject</Th>
          <Th>Channel</Th>
          <Th>Ticket form</Th>
          <Th>Requester</Th>
          <Th>Requested</Th>
          <Th>Assignment</Th>
          <Th>Assignment</Th>
          <Th>Assignment</Th>
          <Th>Assignment</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((row, index) => (
          <Tr key={index} className="table-row cursor-pointer" onClick={() => handleUserDetails(row.id)}>
            <Td>
              <Checkbox size="sm" />
            </Td>
            <Td>
              <div className="flex justify-center items-center gap-1">
                <div className="px-2 bg-blue-600 text-white font-bold rounded-sm">P</div>
                {row.id}
              </div>
              </Td>
            <Td>{row.subject}</Td>
            <Td>{row.channel}</Td>
            <Td>{row.ticketForm}</Td>
            <Td>{row.requester}</Td>
            <Td>{row.requested}</Td>
            {row.assignments.map((assignment, idx) => (
              <Td key={idx}>{assignment}</Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
      </div>
    </div>
  );
};

export default HomeTableComponent;
