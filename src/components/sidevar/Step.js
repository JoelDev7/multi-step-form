export default function Step({
  step_number = 0,
  step_name,
  is_active = false,
}) {
  return (
    <div
      style={{ zIndex: 5 }}
      className="relative flex flex-row items-center p-1 mb-5"
      role={"button"}
      tabIndex={0}
    >
      <div
        className={
          // Changes the cirlce color when the step is active.
          (is_active ? "bg-light_blue" : "border border-white text-white") +
          " w-10 h-10 flex items-center justify-center text-lg font-medium rounded-full"
        }
      >
        {" "}
        {step_number}
      </div>
      <h2 className="text-white ml-3 hidden md:inline">
        <span className="block font-thin text-sm">STEP {step_number}</span>
        <span className="block  font-bold text-sm">{step_name}</span>
      </h2>
    </div>
  );
}
