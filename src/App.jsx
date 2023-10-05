import { useState } from "react";
import styled from "styled-components";
import Rate from "./Components/Rate/Rate";
import Result from "./Components/Rate/Result/Result";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
function App() {
  const [number, setNumber] = useState();
  const [submit, setSubmit] = useState(false);
  console.log(submit);
  return (
    <Wrapper>
      {submit ? (
        <Result number={number} />
      ) : (
        <Rate number={number} setNumber={setNumber} setSubmit={setSubmit} />
      )}
    </Wrapper>
  );
}

export default App;
