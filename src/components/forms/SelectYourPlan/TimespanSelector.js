export default function TimespanSelector({ timespan, setSelection }) {
  return (
    <div className="flex justify-center items-center mt-9 bg-light_gray bg-opacity-30 rounded-md h-10">
      <span
        className={
          (timespan = "Monthly" ? "text-cool_gray " : "text-marine_blue ") +
          "font-medium"
        }
      >
        Monthly
      </span>
      <div className="flex">
        <label className="relative inline-flex items-center cursor-pointer mx-4">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-9 h-5 bg-marine_blue peer-focus:outline-none peer-focus:ring-3 peer-focus:ring-purplish_blue rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[5px] after:bg-white   after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-marine_blue"></div>
        </label>
      </div>
      <span
        className={
          (timespan = "Yearly" ? "text-cool_gray " : "text-marine_blue ") +
          "font-medium"
        }
      >
        Yearly
      </span>
    </div>
  );
}
