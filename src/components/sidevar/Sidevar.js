import Step from "./Step";
import shape1 from "../../img/shape1.png";
import shape2 from "../../img/shape2.png";
import shape3 from "../../img/shape3.png";

export default function Sidevar({ activeForm, displayActiveForm }) {
  const steps = [
    { step_number: 1, step_name: "YOUR INFO" },
    { step_number: 2, step_name: "SELECT PLAN" },
    { step_number: 3, step_name: "ADD-ONS" },
    { step_number: 4, step_name: "SUMMARY" },
  ];

  return (
    <aside className="bg-purplish_blue sm:rounded-none md:rounded-xl overflow-hidden relative h-full w-full md:w-[250]">
      <div className="px-7 py-8 h-full flex flex-row md:flex-col w-full justify-center items-center md:justify-start md:items-start">
        {/* Still don't know why but semicolons at the end of jsx elements create
        vertical spaces.*/}
        {steps.map((step, i) => {
          return (
            <Step
              {...step}
              activeForm={activeForm}
              displayActiveForm={displayActiveForm}
              key={step.step_name}
            />
          );
        })}
      </div>
      <img
        src={shape1}
        style={{
          width: "400px",
          position: "absolute",
          bottom: "-125px",
          right: "-110px",
          rotate: "-45deg",
          zIndex: 1,
        }}
        alt=""
      />
      <img
        src={shape2}
        style={{
          maxWidth: "1000px", // Necesary to override tailwind's responsive image and video directive colliding with this style settings.
          width: "380px",
          position: "absolute",
          bottom: "-65px",
          left: "-142px",
          rotate: "47deg",
        }}
        alt=""
      />
      <img
        src={shape3}
        style={{
          maxWidth: "200px", // Necesary to override tailwind's responsive image and video directive colliding with this style settings.
          width: "52px",
          position: "absolute",
          bottom: "78px",
          right: "60px",
          zIndex: 2,
        }}
        alt=""
      />
    </aside>
  );
}
