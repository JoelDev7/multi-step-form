import { useState } from "react";
import PersonalInfoForm from "./forms/PersonalInfo/PersonalInfoForm";
import Sidevar from "./sidevar/Sidevar";
import DiscreteButton from "./forms/buttons/DiscreteButton";
import SolidButton from "./forms/buttons/SolidButton";

export default function GameRegistrationWrapper() {
  const [activeForm, setActiveForm] = useState([true, false, false, false]);
  /**
   * Sets de active state of the form currently displayed and marks the step associated.
   * @param {number} index The index associated to the active step and form components.
   */
  function displayActiveForm(index) {
    let currentFormState = activeForm.map((element) => false);
    currentFormState[index - 1] = true;
    setActiveForm(currentFormState);
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
        {activeForm[0] ? <PersonalInfoForm /> : null}
        {activeForm[1] ? (
          <div className="w-full h-full font-semibold text-xl flex justify-center items-center">
            form 2
          </div>
        ) : null}
        {activeForm[2] ? (
          <div className="w-full h-full font-semibold text-xl flex justify-center items-center">
            form 3
          </div>
        ) : null}
        {activeForm[3] ? (
          <div className="w-full h-full font-semibold text-xl flex justify-center items-center">
            Form 4
          </div>
        ) : null}
      </div>
      <div className="flex md:hidden w-full pl-0 pr-4 py-5 bg-light_gray justify-between items-center">
        <DiscreteButton text={"Go Back"} />
        <SolidButton text={"Next Step"} />
      </div>
    </div>
  );
}
