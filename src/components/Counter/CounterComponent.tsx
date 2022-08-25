import { useState } from "react";
import countTime from "../../utils/countTime";
import deadLine from "../../utils/utils";
import StyledCounter from "./StyledCounter";

const CounterComponent = (): JSX.Element => {
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

  setInterval(() => {
    const timeLeftToBeFree = deadLine - new Date().getTime();
    const daysLeft = countTime(timeLeftToBeFree);
    setTimeLeft(daysLeft);
  }, 1000);

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

export default CounterComponent;
