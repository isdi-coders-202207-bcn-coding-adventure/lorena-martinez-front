interface CounterProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
const Counter = ({
  days,
  hours,
  minutes,
  seconds,
}: CounterProps): JSX.Element => {
  return (
    <ul className="counter-container">
      <li className="counter-days">
        <span className="counter-days__numbers">{days}</span>
        <span className="counter-days__title ">days</span>
      </li>
      <li className="counter-hours">
        <span className="counter-hours__numbers">{hours}</span>
        <span className="counter-hours__title ">hours</span>
      </li>
      <li className="counter-minutes">
        <span className="counter-minutes__numbers">{minutes}</span>
        <span className="counter-minutes__title ">minutes</span>
      </li>
      <li className="counter-seconds">
        <span className="counter-seconds__numbers">{seconds}</span>
        <span className="counter-seconds__title ">seconds</span>
      </li>
    </ul>
  );
};

export default Counter;
