import Step from "./Step";
import shape1 from "../../img/shape1.png";
import shape2 from "../../img/shape2.png";
import shape3 from "../../img/shape3.png";
import { useEffect, useState } from "react";

export default function Sidevar() {
  // Approach 2 dynamic step number
  const [stepStatuses, setStepStatuses] = useState([]);

  const steps = [
    { step_number: 1, step_name: "YOUR INFO", is_active: true },
    { step_number: 2, step_name: "SELECT PLAN", is_active: false },
    { step_number: 3, step_name: "ADD-ONS", is_active: false },
    { step_number: 4, step_name: "SUMMARY", is_active: false },
  ];
  const stepStatusHelper = [];
  useEffect(() => {
    // Loads initial state for every step element.
    steps.map((step) => {
      stepStatusHelper.push(step.is_active);
    });
    setStepStatuses(stepStatusHelper);
  }, []);

  // Approach 1 static step number
  // const [step1, setStep1] = useState({
  //   step_number: 1,
  //   step_name: "YOUR INFO",
  //   is_active: true,
  // });
  // const [step2, setStep2] = useState({
  //   step_number: 2,
  //   step_name: "SELECT PLAN",
  //   is_active: false,
  // });
  // const [step3, setStep3] = useState({
  //   step_number: 3,
  //   step_name: "ADD-ONS",
  //   is_active: false,
  // });
  // const [step4, setStep4] = useState({
  //   step_number: 4,
  //   step_name: "SUMMARY",
  //   is_active: false,
  // });
  return (
    <aside
      style={{ width: "275px" }}
      className="bg-purplish_blue rounded-xl overflow-hidden relative"
    >
      <div style={{ marginBottom: "250px" }} className="pl-7 pt-8">
        {/* Still don't know why but semicolons at the end of jsx elements create
        vertical spaces.*/}
        <Step
          step_number={1}
          step_name={"YOUR INFO"}
          active={stepStatuses[0]}
        />
        <Step
          step_number={2}
          step_name={"SELECT PLAN"}
          active={stepStatuses[1]}
        />
        <Step step_number={3} step_name={"ADD-ONS"} active={stepStatuses[2]} />
        <Step step_number={4} step_name={"SUMMARY"} active={stepStatuses[3]} />
      </div>
      <img
        src={shape1}
        style={{
          width: "400px",
          position: "absolute",
          bottom: "-31%",
          right: "-37%",
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
          bottom: "-15%",
          left: "-51%",
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
          bottom: "21%",
          left: "55%",
          zIndex: 2,
        }}
        alt=""
      />
    </aside>
  );

  // "total form size 600x940";
}
