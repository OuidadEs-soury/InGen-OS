export interface BootMessage {
  text: string;
  status: "OK" | "RUNNING";
}

export const bootMessages: BootMessage[] = [
  {
    text: "Initializing InGen Kernel",
    status: "OK",
  },
  {
    text: "Loading Genetic Database",
    status: "OK",
  },
  {
    text: "Checking Electric Fence Network",
    status: "OK",
  },
  {
    text: "Connecting to Isla Nublar",
    status: "OK",
  },
  {
    text: "Starting DNA Sequencer",
    status: "OK",
  },
  {
    text: "Authenticating Personnel",
    status: "OK",
  },
  {
    text: "Loading Dinosaur Registry",
    status: "OK",
  },
  {
    text: "Starting InGen Operating System",
    status: "RUNNING",
  },
];