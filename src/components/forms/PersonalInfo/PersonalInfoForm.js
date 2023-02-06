import { useForm } from "react-hook-form";
import Input from "./Input";

export default function PersonalInfoForm({
  formId,
  formData,
  addFormData,
  activeForm,
  displayActiveForm,
}) {
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
    console.log(data);
    addFormData(data);
    displayActiveForm(activeForm + 1);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} id={formId} className="">
      <div>
        <div className="flex flex-col">
          {formInputs.map((input) => {
            return (
              <Input
                {...input}
                default_value={formData[input.id]}
                key={input.id}
                register={register}
                show_error={errors[input.id]}
              />
            );
          })}
        </div>
      </div>
    </form>
  );
}
