import { StrictMode } from "react";
import GameRegistrationWrapper from "./components/GameRegistrationWrapper";

export function App() {
  return (
    <StrictMode>
      <div className="h-screen flex justify-center items-center bg-light_blue">
        <GameRegistrationWrapper />
      </div>
    </StrictMode>
  );
}
