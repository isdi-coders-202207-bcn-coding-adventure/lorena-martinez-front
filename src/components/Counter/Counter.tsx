const Counter = (): JSX.Element => {
  return (
    <ul className="counter-container">
      <li className="counter-days">
        <span className="counter-days__numbers">02</span>
        <span className="counter-days__title ">days</span>
      </li>
      <li className="counter-hours">
        <span className="counter-hours__numbers">20</span>
        <span className="counter-hours__title ">hours</span>
      </li>
      <li className="counter-minutes">
        <span className="counter-minutes__numbers">34</span>
        <span className="counter-minutes__title ">minutes</span>
      </li>
      <li className="counter-seconds">
        <span className="counter-seconds__numbers">09</span>
        <span className="counter-seconds__title ">seconds</span>
      </li>
    </ul>
  );
};

export default Counter;
