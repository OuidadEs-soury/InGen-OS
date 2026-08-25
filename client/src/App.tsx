import { useState } from "react";

import BootSequence from "./components/system/BootSequence/BootSequence";
import SystemAccess from "./components/system/SystemAccess/SystemAccess";

type SystemState =
  | "booting"
  | "access"
  | "desktop";

function App() {
  const [systemState, setSystemState] =
    useState<SystemState>("booting");

  if (systemState === "booting") {
    return (
      <BootSequence
        onComplete={() =>
          setSystemState("access")
        }
      />
    );
  }

  if (systemState === "access") {
    return (
      <SystemAccess
        onAccessGranted={() =>
          setSystemState("desktop")
        }
      />
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "var(--bg-primary)",
        color: "var(--accent)",
        fontFamily: "Orbitron, sans-serif",
      }}
    >
      INGEN DESKTOP INITIALIZING...
    </main>
  );
}

export default App;