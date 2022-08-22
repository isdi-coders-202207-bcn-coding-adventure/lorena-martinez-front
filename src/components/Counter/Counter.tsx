const Counter = (): JSX.Element => {
  return (
    <ul className="counter-container">
      <li className="counter-item">
        <span className="counter-item__numbers">02</span>
        <span className="counter-item__text ">days</span>
      </li>
      <li className="counter-item">
        <span className="counter-item__numbers">20</span>
        <span className="counter-item__text ">hours</span>
      </li>
      <li className="counter-item">
        <span className="counter-item__numbers">34</span>
        <span className="counter-item__text">minutes</span>
      </li>
      <li className="counter-item">
        <span className="counter-item__numbers">09</span>
        <span className="counter-item__text ">seconds</span>
      </li>
    </ul>
  );
};

export default Counter;
