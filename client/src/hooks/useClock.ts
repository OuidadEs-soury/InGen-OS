import { useEffect, useState } from "react";

function getCurrentTime() {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date());
}

export function useClock() {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return time;
}