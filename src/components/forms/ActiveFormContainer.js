import DiscreteButton from "./buttons/DiscreteButton";
import SolidButton from "./buttons/SolidButton";

export default function ActiveFormContainer({
  activeForm,
  title,
  form_description,
  form,
  formId,
}) {
  return (
    <div className="m-5 p-5 md:p-0 shadow-xl md:shadow-none flex flex-col justify-between relative -top-14 md:top-0 z-10 bg-white rounded-md">
      <div>
        <label
          htmlFor={formId}
          className="text-4xl text-marine_blue font-medium inline-block mb-2 mt-2"
        >
          {" "}
          {title}
        </label>
        <p className="text-cool_gray mb-7"> {form_description}</p>
        <div className="flex flex-col">{form}</div>
      </div>
      <div className="justify-between self-end w-full hidden md:flex">
        {activeForm !== 0 ? <DiscreteButton text={"Go Back"} /> : <div></div>}
        <SolidButton text={"Next Step"} form_id={formId} />
      </div>
    </div>
  );
}
