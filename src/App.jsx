import { useState } from "react";
import styled from "styled-components";
import Rate from "./Components/Rate/Rate";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
function App() {
  return (
    <Wrapper>
      <Rate />
    </Wrapper>
  );
}

export default App;
