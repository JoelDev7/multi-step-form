export default function Step({ step_number = 0, step_name, active = false }) {
  return (
    <div
      style={{ zIndex: 5 }}
      className="bg-purplish_blue relative flex flex-row items-center p-1 mb-5"
    >
      <span
        className={
          (active ? "bg-light_blue" : "border border-white text-white") +
          " w-10 h-10 flex items-center justify-center text-sm font-bold rounded-full"
        }
      >
        {" "}
        {step_number}
      </span>
      <h2 className="text-white ml-3">
        <span className="block font-thin text-sm">STEP {step_number}</span>
        <span className="block  font-bold text-sm">{step_name}</span>
      </h2>
    </div>
  );
}
