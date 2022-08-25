import styled from "styled-components";
import Header from "../Header/Header";
import CounterComponent from "../Counter/CounterComponent";

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1200px;
`;

const Layout = (): JSX.Element => {
  return (
    <StyledContainer>
      <Header />
      <CounterComponent />
    </StyledContainer>
  );
};

export default Layout;
