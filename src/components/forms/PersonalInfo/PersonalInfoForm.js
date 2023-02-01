import { useEffect } from "react";
import { useForm } from "react-hook-form";
import SolidButton from "../buttons/SolidButton";
import Input from "./Input";

export default function PersonalInfoForm({ setActiveFormId, addFormData }) {
  const formInputs = [
    {
      label: "Name",
      id: "name",
      type: "text",
      placeholder: "e.g. Stephen King",
      validators: { required: true },
      error_message: "This field is required",
    },
    {
      label: "Email Address",
      id: "email_address",
      type: "email",
      placeholder: "e.g. stephenking@lorem.com",
      validators: { required: true },
      error_message: "This field is required",
    },
    {
      label: "Phone Number",
      id: "phone_number",
      type: "tel",
      placeholder: "e.g. +1 234 567 890",
      validators: { required: true },
      error_message: "This field is required",
    },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    addFormData(data);
    console.log("next step");
  };
  useEffect(() => {
    setActiveFormId("PersonalInfoForm");
    console.log("PersonalInfoForm");
  }, []);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="PersonalInfoForm"
      className="m-5 p-5 md:p-0 shadow-xl md:shadow-none flex flex-col justify-between relative -top-14 md:top-0 z-10 bg-white rounded-md"
    >
      <div>
        <label
          htmlFor="PersonalInfoForm"
          className="text-4xl text-marine_blue font-medium inline-block mb-2 mt-2"
        >
          {" "}
          Personal Info
        </label>
        <p className="text-cool_gray mb-7">
          {" "}
          Please provide your name, email address, and phone number.
        </p>
        <div className="flex flex-col">
          {formInputs.map((input) => {
            return (
              <Input
                {...input}
                key={input.id}
                register={register}
                show_error={errors[input.id]}
              />
            );
          })}
        </div>
      </div>
      <div className="justify-end self-end hidden md:block">
        <SolidButton text={"Next Step"} />
      </div>
    </form>
  );
}
