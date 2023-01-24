import PersonalInfoForm from "./forms/PersonalInfo/PersonalInfoForm";
import Sidevar from "./sidevar/Sidevar";

export default function GameRegistrationWrapper() {
  return (
    <div className="p-0 md:p-4 my-auto flex flex-col md:flex-row bg-white rounded-none md:rounded-xl lg:min-h-[550] lg:min-w-[900]">
      <div>
        <Sidevar />
      </div>
      <div className="w-full flex justify-around">
        <PersonalInfoForm />
      </div>
    </div>
  );
}
// "total form size 600x940";
