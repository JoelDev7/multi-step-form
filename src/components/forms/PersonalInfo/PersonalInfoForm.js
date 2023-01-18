import { useState } from "react";
import Input from "./Input";

export default function PersonalInfoForm() {
  const formInputs = [
    {
      label: "Name",
      id: "name",
      type: "text",
      placeholder: "e.g. Stephen King",
      value: "",
    },
    {
      label: "Email Address",
      id: "email_address",
      type: "email",
      placeholder: "e.g. stephenking@lorem.com",
      value: "",
    },
    {
      label: "Phone Number",
      id: "phone_number",
      type: "tel",
      placeholder: "e.g. +1 234 567 890",
      value: "",
    },
  ];
  const [formInputsStates, setFormInputsStates] = useState(formInputs);
  return (
    <form id="PersonalInfoForm">
      <label htmlFor="PersonalInfoForm"> Personal Info</label>
      <p> Please provide your name, email address, and phone number.</p>
      {formInputsStates.map((input) => {
        return <Input {...input} />;
      })}
    </form>
  );
}
