import { useEffect, useState } from "react";
import { turn } from "../../data/types";

const Timer = ({ set }: turn) => {
  const [time, setTime] = useState(180);

  useEffect(() => {
    const timer = (inter: NodeJS.Timeout) => {
      setTime((prev) => prev - 1);
    };

    const inter: NodeJS.Timeout = setInterval(() => timer(inter), 1000);
    if (time === 0) set(3);
    return () => clearInterval(inter);
  }, [time, set]);

  return (
    <h4>
      {`${Math.floor(time / 60)}`.padStart(2, "0") +
        ":" +
        `${Math.floor(time % 60)}`.padStart(2, "0")}
    </h4>
  );
};

export default Timer;
