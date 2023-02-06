export default function PlanCard({
  plan_icon,
  plan_title = "Title",
  plan_cost = "Cost",
}) {
  return (
    <div className="border border-cool_gray p-3 pt-4 hover:border-marine_blue">
      <div>{plan_icon}</div>
      <div>
        <h2 className="text-marine_blue font-medium">{plan_title}</h2>
        <p className="text-cool_gray">{plan_cost}</p>
      </div>
    </div>
  );
}
