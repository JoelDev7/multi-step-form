import { useState } from "react";
import PersonalInfoForm from "./forms/PersonalInfo/PersonalInfoForm";
import Sidevar from "./sidevar/Sidevar";
import DiscreteButton from "./forms/buttons/DiscreteButton";
import SolidButton from "./forms/buttons/SolidButton";
import ActiveFormContainer from "./forms/ActiveFormContainer";

export default function GameRegistrationWrapper() {
  const [activeForm, setActiveForm] = useState(0);
  const [formData, setFormData] = useState({});
  const generalFormProps = {
    formData: formData,
    addFormData: addFormData,
    activeForm: activeForm,
    displayActiveForm: displayActiveForm,
  };
  const forms = [
    {
      title: "Personal Info",
      form_description:
        "Please provide your name, email address, and phone number.",
      form: (
        <PersonalInfoForm {...generalFormProps} formId={"PersonalInfoForm"} />
      ),
      formId: "PersonalInfoForm",
    },
    {
      title: "Other",
      form_description:
        "Please provide your name, email address, and phone number.",
      form: (
        <PersonalInfoForm {...generalFormProps} formId={"PersonalInfoForm"} />
      ),
      formId: "PersonalInfoForm",
    },
  ];
  /**
   * Adds the local data from the form to the general data container to crearte the registration.
   * @param {object} data The data from the current form.
   */
  function addFormData(data) {
    setFormData({ ...formData, ...data });
  }
  /*
   * Sets de active state of the form currently displayed and marks the step associated.
   * @param {number} index The index associated to the active step and form components.
   */
  function displayActiveForm(index) {
    if (index <= forms.length - 1) {
      setActiveForm(index);
    }
  }
  /**
   * Sends the subscription petition to the API.
   */
  function subscriveUser() {
    // Some http request.
    console.log(formData);
  }
  return (
    <div className="p-0 md:p-3 my-auto flex flex-col md:flex-row bg-none md:bg-white rounded-none md:rounded-xl w-full md:w-10/12 lg:w-8/12 lg:h-[85vh]">
      <div>
        <Sidevar
          activeForm={activeForm}
          displayActiveForm={displayActiveForm}
        />
      </div>
      <div className="w-full flex justify-around">
        <ActiveFormContainer {...generalFormProps} {...forms[activeForm]} />
      </div>
      <div className="flex md:hidden w-full pl-0 pr-4 py-5 bg-light_gray bg-opacity-60 justify-between items-center">
        {activeForm !== 0 ? <DiscreteButton text={"Go Back"} /> : <div></div>}
        <SolidButton text={"Next Step"} form_id={forms[activeForm].formId} />
      </div>
      <button onClick={() => subscriveUser()}>send data</button>
    </div>
  );
}
