import React, { useState } from "react";
import Select from "react-select";
import { FormControl, Input } from "@chakra-ui/react";

const BrandOptions = [
  { value: "Home Buy", label: "Home Buy" },
  { value: "Personal Loan", label: "Personal Loan" },
  { value: "Education", label: "Education" },
];
const AssigneeOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const FollowersOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const FormOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const TagsOption = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: '30px', // Set the minimum height here
    height: '30px',    // Set the height here
    fontSize: '12px',  // Adjust font size if needed
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: '0px 8px', // Adjust padding if needed
    height: '20px',     // Make sure this matches the control height
    display: 'flex',
    alignItems: 'center', // Aligns the content vertically
  }),
  input: (provided, state) => ({
    ...provided,
    margin: '0px',
    padding: '0px', // Adjust padding to fit the new height
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: '25px', // Make sure this matches the control height
  }),
};

const FormComponent = () => {
  const [formData, setFormData] = useState({
    selectedOption: null,
    assigneeOption: null,
    selectedFollower: null,
    requesterName: "",
    formSelect: null,
    tags: null,
    type: null,
    priority: null,
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="border-b py-2 px-4">
        <div className="mb-2">
          <label htmlFor="brand" className="font-semibold text-sm mb-1">
            Brand
          </label>
          <Select
            id="brand"
            name="selectedOption"
            value={formData.selectedOption}
            onChange={(option) => handleChange("selectedOption", option)}
            options={BrandOptions}
            className="select-input"
            styles={customSelectStyles}
          />
        </div>

        <div className="mb-2">
          <FormControl>
            <label className="font-semibold text-sm mb-1">Requester</label>
            <Input
              type="text"
              size='sm'
              name="requesterName"
              placeholder="Requester Name"
              _placeholder={{ fontSize: "12px" }}
              value={formData.requesterName}
              onChange={(e) => handleChange("requesterName", e.target.value)}
            />
          </FormControl>
        </div>

        <div className="mb-2">
          <label htmlFor="assignee" className="font-semibold text-sm mb-1">
            Select Assignee
          </label>
          <Select
            isMulti
            name="assigneeOption"
            value={formData.assigneeOption}
            onChange={(option) => handleChange("assigneeOption", option)}
            options={AssigneeOptions}
            styles={customSelectStyles}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="followers" className="font-semibold text-sm mb-1">
            Followers
          </label>
          <Select
            isMulti
            name="selectedFollower"
            value={formData.selectedFollower}
            onChange={(option) => handleChange("selectedFollower", option)}
            options={FollowersOptions}
            styles={customSelectStyles}
          />
        </div>
      </div>
      <div className="py-2 px-4">
        <div className="mb-2">
          <label htmlFor="formSelect" className="font-semibold text-sm mb-1">
            Form
          </label>
          <Select
            id="formSelect"
            name="formSelect"
            value={formData.formSelect}
            onChange={(option) => handleChange("formSelect", option)}
            options={FormOptions}
            styles={customSelectStyles}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="tags" className="font-semibold text-sm mb-1">
            Tags
          </label>
          <Select
            isMulti
            name="tags"
            value={formData.tags}
            onChange={(option) => handleChange("tags", option)}
            options={TagsOption}
            styles={customSelectStyles}
          />
        </div>
        <div className="mb-2 flex gap-2">
          <div className="w-1/2">
            <label htmlFor="type" className="font-semibold text-sm mb-1">
              Type
            </label>
            <Select
              id="type"
              name="type"
              value={formData.type}
              onChange={(option) => handleChange("type", option)}
              options={FormOptions}
              styles={customSelectStyles}
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="priority" className="font-semibold text-sm mb-1">
              Priority
            </label>
            <Select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={(option) => handleChange("priority", option)}
              options={FormOptions}
              styles={customSelectStyles}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
