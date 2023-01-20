import { useState } from "react";
import SolidButton from "../buttons/SolidButton";
import Input from "./Input";

export default function PersonalInfoForm() {
  const formInputs = [
    {
      label: "Name",
      id: "name",
      type: "text",
      placeholder: "e.g. Stephen King",
    },
    {
      label: "Email Address",
      id: "email_address",
      type: "email",
      placeholder: "e.g. stephenking@lorem.com",
    },
    {
      label: "Phone Number",
      id: "phone_number",
      type: "tel",
      placeholder: "e.g. +1 234 567 890",
    },
  ];
  const [formInputsStates, setFormInputsStates] = useState(formInputs);
  return (
    <form id="PersonalInfoForm" className="p-4 flex flex-col justify-between">
      <div>
        <label
          htmlFor="PersonalInfoForm"
          className="text-4xl text-marine_blue font-medium inline-block mb-2 mt-5"
        >
          {" "}
          Personal Info
        </label>
        <p className="text-cool_gray mb-7">
          {" "}
          Please provide your name, email address, and phone number.
        </p>
        <div className="flex flex-col">
          {formInputsStates.map((input) => {
            return <Input {...input} key={input.id} />;
          })}
        </div>
      </div>
      <div className="flex justify-end self-end">
        <SolidButton text={"Next Step"} />
      </div>
    </form>
  );
}
