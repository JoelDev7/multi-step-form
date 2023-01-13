export default function Step({ step_number, step_name, active }) {
  return (
    <div className="bg-purplish_blue flex flex-row items-center p-1">
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
