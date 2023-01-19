import PersonalInfoForm from "./forms/PersonalInfo/PersonalInfoForm";
import Sidevar from "./sidevar/Sidevar";

export default function GameRegistrationWrapper() {
  return (
    <div className="p-3 my-auto flex md:flex-row bg-white rounded-xl lg:min-h-[500] lg:min-w-[940]">
      <div>
        <Sidevar />
      </div>
      <div className="w-full flex justify-around ">
        <PersonalInfoForm />
      </div>
    </div>
  );
}
// "total form size 600x940";
