import styled from "styled-components";

const StyledCounter = styled.ul`
  list-style: none;
  background-color: #243342;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-items: center;
  padding: 0;
  justify-content: center;
  height: 15rem;
  align-items: center;
  font-family: oxanium;

  .counter-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__numbers {
      background-color: #ffc700;
      width: 4rem;
      height: 4rem;
      border-radius: 15%;
      justify-content: center;
      color: #243342;
      display: grid;
      place-items: center;
      font-size: 2rem;
    }
    &__text {
      color: #ebedec;
      text-align: center;
      font-size: 0.8rem;
    }
  }
`;

export default StyledCounter;
