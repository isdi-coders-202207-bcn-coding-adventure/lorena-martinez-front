const Counter = (): JSX.Element => {
  return (
    <ul className="counter-container">
      <li className="counter-item">
        <span className="counter-item__numbers">02</span>
        <span className="counter-item__title ">days</span>
      </li>
      <li className="counter-item">
        <span className="counter-item__numbers">20</span>
        <span className="counter-item__title ">hours</span>
      </li>
      <li className="counter-item">
        <span className="counter-item__numbers">34</span>
        <span className="counter-item__title ">minutes</span>
      </li>
      <li className="counter-item">
        <span className="counter-item__numbers">09</span>
        <span className="counter-item__title ">seconds</span>
      </li>
    </ul>
  );
};

export default Counter;
