import { useForm } from "react-hook-form";
import DiscreteButton from "../buttons/DiscreteButton";
import SolidButton from "../buttons/SolidButton";

export default function SelectYourPlanForm(
  formId,
  formData,
  addFormData,
  activeForm,
  displayActiveForm
) {
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
  <form
    onSubmit={handleSubmit(onSubmit)}
    id={formId}
    className="m-5 p-5 md:p-0 shadow-xl md:shadow-none flex flex-col justify-between relative -top-14 md:top-0 z-10 bg-white rounded-md"
  >
    <div>
      <label
        htmlFor={formId}
        className="text-4xl text-marine_blue font-medium inline-block mb-2 mt-2"
      >
        {" "}
        Personal Info
      </label>
      <p className="text-cool_gray mb-7">
        {" "}
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex flex-col">{}</div>
    </div>
    <div className="justify-end self-end hidden md:block">
      <DiscreteButton text={"Go Back"} />
      <SolidButton text={"Next Step"} />
    </div>
  </form>;
}
