import { useState } from "react";

export default function TimespanSelector({
  selected_plan,
  is_yearly,
  setSelection,
}) {
  const [buttonState, setButtonState] = useState(is_yearly);
  function changeSelection() {
    const newState = buttonState ? false : true;
    setButtonState(newState);
    setSelection({ selected_plan, is_yearly: newState });
  }
  return (
    <div className="flex justify-center items-center mt-9 bg-light_gray bg-opacity-30 rounded-md h-10">
      <span
        className={
          (buttonState === false ? "text-marine_blue " : "text-cool_gray ") +
          "font-medium"
        }
      >
        Monthly
      </span>
      <div className="flex">
        <label className="relative inline-flex items-center cursor-pointer mx-4">
          <input
            type="checkbox"
            checked={buttonState}
            onChange={changeSelection}
            className="sr-only peer"
          />
          <div className="w-9 h-5 bg-marine_blue peer-focus:outline-none peer-focus:ring-3 peer-focus:ring-purplish_blue rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[5px] after:bg-white   after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-marine_blue"></div>
        </label>
      </div>
      <span
        className={
          (buttonState === true ? "text-marine_blue " : "text-cool_gray ") +
          "font-medium"
        }
      >
        Yearly
      </span>
    </div>
  );
}
