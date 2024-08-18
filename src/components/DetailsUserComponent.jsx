import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Select from "react-select";
import { IoIosArrowDown } from "react-icons/io";
import FormComponent from "./form-component/FormComponent";
import ConversationComponent from "./form-component/ConversationComponent";
import UsersProfileComponent from "./form-component/UsersProfileComponent";

const macroOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: "30px", // Set the minimum height here
    height: "30px", // Set the height here
    fontSize: "12px", // Adjust font size if needed
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: "0px 8px", // Adjust padding if needed
    height: "20px", // Make sure this matches the control height
    display: "flex",
    alignItems: "center", // Aligns the content vertically
  }),
  input: (provided, state) => ({
    ...provided,
    margin: "0px",
    padding: "0px", // Adjust padding to fit the new height
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: "25px", // Make sure this matches the control height
  }),
};

const DetailsUserComponent = () => {
  const [macroOption, setMacroOption] = useState(null);
  return (
    <>
      <div className="details-container ">
        <div className="flex justify-between items-center p-2 border-b">
          <div className="border flex">
            <div className="border-r px-4 py-2">Sachin Tendulkar</div>
            <div className="px-4 py-2 ticket-status ronded-lg">
              <span className="bg-red-600 text-white text-xs px-2 mr-1">
                OPEN
              </span>
              Ticket #1234
            </div>
          </div>
          <div className="border flex gap-2 items-center py-2 px-4">
            <p>Next</p>
            <FaArrowRightLong size={10} />
          </div>
        </div>
        <div className="flex h-full">
          <div className="left-section border h-full">
            <FormComponent />
          </div>
          <div className="middle-section border h-full">
            <ConversationComponent />
          </div>
          <div className="right-section border h-full">
            <UsersProfileComponent />
          </div>
        </div>

        <div className="flex justify-between w-full h-12 px-4 border">
          <div className="mt-1 w-1/2">
            <Select
              id="macro"
              name="selectedOption"
              value={macroOption}
              onChange={(option) => setMacroOption(option)}
              options={macroOptions}
              className="select-input"
              styles={customSelectStyles}
            />
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex gap-1 justify-center items-center">
              <p className="text-sm">Stay on ticket</p>
              <IoIosArrowDown />
            </div>
            <div className="flex gap-1 items-center justify-center">
              <div className=" bg-black px-2 py-1 border rounded-l-lg text-white text-md">
                Submit as <span className="font-bold">Open</span>
              </div>
              <div className="bg-black text-white border rounded-r-lg px-2 py-2">
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsUserComponent;
