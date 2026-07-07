import { useEffect, useState } from "react";

const bootMessages = [
  "Initializing InGen Kernel...",
  "Loading Genetic Database...",
  "Checking Electric Fence Network...",
  "Connecting to Isla Nublar...",
  "Starting DNA Sequencer...",
  "Authenticating Personnel...",
  "Loading Dinosaur Registry...",
  "System Ready."
];

export function useBootSequence() {
  const [messages, setMessages] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setMessages((prev) => [...prev, bootMessages[index]]);

      index++;

      if (index === bootMessages.length) {
        clearInterval(interval);

        setTimeout(() => {
          setFinished(true);
        }, 1500);
      }
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return {
    messages,
    finished,
  };
}