export default function PlanCard({
  plan_icon,
  plan_title = "Title",
  plan_cost = "Cost",
  selected_plan,
  timespan,
  setSelection,
}) {
  return (
    <button
      className={
        (selected_plan === plan_title
          ? "bg-light_blue bg-opacity-20 border-purplish_blue "
          : "") +
        "flex items-center md:block border border-light_gray p-3 pt-4 rounded-md hover:border-purplish_blue"
      }
    >
      <div className="flex justify-center items-center md:items-start md:justify-start">
        <img src={plan_icon} alt="" className="mb-0 md:mb-6" />
      </div>
      <div className="text-left ml-4 md:ml-0">
        <h2 className="text-marine_blue font-medium">{plan_title}</h2>
        <p className="text-cool_gray">{plan_cost}</p>
      </div>
    </button>
  );
}
