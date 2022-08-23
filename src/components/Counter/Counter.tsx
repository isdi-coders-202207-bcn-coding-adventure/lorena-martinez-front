import { useEffect, useState } from "react";
import deadLine from "../../utils";
import StyledCounter from "./StyledCounter";

const Counter = (): JSX.Element => {
  interface Timer {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }

  const initalTimer: Timer = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  const [timeLeft, setTimeLeft] = useState(initalTimer);

  useEffect(() => {
    setInterval(() => {
      const timeLeftToBeFree = deadLine - new Date().getTime();
      setTimeLeft({
        days: Math.floor(timeLeftToBeFree / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (timeLeftToBeFree % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (timeLeftToBeFree % (1000 * 60 * 60)) / (1000 * 60)
        ),
        seconds: Math.floor((timeLeftToBeFree % (1000 * 60)) / 1000),
      });
    }, 1000);
  }, []);

  return (
    <StyledCounter className="counter-container">
      <li className="counter-item">
        <span className="counter-item__numbers">{timeLeft.days}</span>
        <span className="counter-item__text ">days</span>
      </li>
      <li className="counter-item">
        <span className="counter-item__numbers">{timeLeft.hours}</span>
        <span className="counter-item__text">hours</span>
      </li>
      <li className="counter-item">
        <span className="counter-item__numbers">{timeLeft.minutes}</span>
        <span className="counter-item__text">minutes</span>
      </li>
      <li className="counter-item">
        <span className="counter-item__numbers">{timeLeft.seconds}</span>
        <span className="counter-item__text">seconds</span>
      </li>
    </StyledCounter>
  );
};

export default Counter;
