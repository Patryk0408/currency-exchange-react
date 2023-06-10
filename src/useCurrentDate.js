import { useState, useEffect } from "react";

export const useCurrentDate = () => {
  const [time, setTime] = useState(new Date());

  const showingNowDate = (time) =>
    time.toLocaleDateString(undefined, {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return {
    time,
    formattedDate: showingNowDate(time),
  };
};
