import { useEffect, useState } from "react";
import { bootMessages } from "../utils/bootMessages";

export function useBootSequence() {
  const [messages, setMessages] = useState<typeof bootMessages>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      setMessages((prev) => [...prev, bootMessages[index]]);

      index++;

      setProgress((index / bootMessages.length) * 100);

      if (index === bootMessages.length) {
        clearInterval(timer);
      }
    }, 800);

    return () => clearInterval(timer);
  }, []);

  return {
    messages,
    progress,
  };
}