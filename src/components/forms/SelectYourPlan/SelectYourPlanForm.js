import { useForm } from "react-hook-form";
import PlanCard from "./PlanCard";
import arcade from "../../../img/icon-arcade.svg";
import advanced from "../../../img/icon-advanced.svg";
import pro from "../../../img/icon-pro.svg";

export default function SelectYourPlanForm(
  formId,
  formData,
  addFormData,
  activeForm,
  displayActiveForm
) {
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
    <form onSubmit={handleSubmit(onSubmit)} id={formId}>
      {planCards.map((plan) => {
        return <PlanCard {...plan} key={plan.plan_title} />;
      })}
    </form>
  );
}
