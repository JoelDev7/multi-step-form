import { useForm } from "react-hook-form";
import PlanCard from "./PlanCard";
import arcade from "../../../img/icon-arcade.svg";
import advanced from "../../../img/icon-advanced.svg";
import pro from "../../../img/icon-pro.svg";
import { useState } from "react";
import TimespanSelector from "./TimespanSelector";

export default function SelectYourPlanForm({
  formId,
  formData,
  addFormData,
  activeForm,
  displayActiveForm,
}) {
  const planCards = [
    {
      plan_icon: arcade,
      plan_title: "Arcade",
      plan_cost: "$9/mo",
    },
    {
      plan_icon: advanced,
      plan_title: "Advanced",
      plan_cost: "$12/mo",
    },
    {
      plan_icon: pro,
      plan_title: "Pro",
      plan_cost: "$15/mo",
    },
  ];
  const [selection, setSelection] = useState({
    selected_plan: "Arcade",
    is_yearly: true,
  });
  const { handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(selection);
    addFormData(selection);
    displayActiveForm(activeForm + 1);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} id={formId}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {planCards.map((plan) => {
          return (
            <PlanCard
              {...plan}
              {...selection}
              setSelection={setSelection}
              key={plan.plan_title}
            />
          );
        })}
      </div>
      <TimespanSelector {...selection} setSelection={setSelection} />
    </form>
  );
}
