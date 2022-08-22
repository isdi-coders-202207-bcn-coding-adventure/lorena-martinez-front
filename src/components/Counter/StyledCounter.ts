import styled from "styled-components";

const StyledCounter = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-items: center;
  padding: 0;
  justify-content: center;
  height: 15rem;
  align-items: center;

  .counter-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__numbers {
      background-color: var(--second-bg-color);
      width: 4rem;
      height: 4rem;
      border-radius: 15%;
      justify-content: center;
      color: var(--main-bg-color);
      display: grid;
      place-items: center;
      font-size: 2rem;
    }
    &__text {
      color: var(--main-text-color);
      text-align: center;
      font-size: 0.8rem;
    }
  }
`;

export default StyledCounter;
