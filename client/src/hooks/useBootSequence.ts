import { useEffect, useState } from "react";
import { bootMessages } from "../utils/bootMessages";

export function useBootSequence() {
  const [messages, setMessages] = useState<typeof bootMessages>([]);
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let index = 0;

    const timer = window.setInterval(() => {
      if (index >= bootMessages.length) {
        window.clearInterval(timer);

        window.setTimeout(() => {
          setFinished(true);
        }, 1800);

        return;
      }

      setMessages((previousMessages) => [
        ...previousMessages,
        bootMessages[index],
      ]);

      index += 1;

      setProgress(Math.round((index / bootMessages.length) * 100));
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return {
    messages,
    progress,
    finished,
  };
}