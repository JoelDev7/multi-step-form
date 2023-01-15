import Step from "./Step";
import shape1 from "../../img/shape1.png";
import shape2 from "../../img/shape2.png";
import shape3 from "../../img/shape3.png";
export default function Sidevar() {
  return (
    <aside
      style={{ width: "275px" }}
      className="bg-purplish_blue rounded-xl overflow-hidden relative"
    >
      <img
        src={shape1}
        style={{
          width: "400px",
          position: "absolute",
          bottom: "-31%",
          right: "-37%",
          rotate: "-45deg",
          zIndex: "100",
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
          zIndex: "1",
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
          zIndex: "9999",
        }}
        alt=""
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </aside>
  );
  <Step step_number={1} step_name={"YOUR INFO"} active={true} />;
  {
    "#f9818d", "#625aff", "#ffaf7e";
  }
}
