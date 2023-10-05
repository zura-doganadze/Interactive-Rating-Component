import React from "react";
import styled from "styled-components";
import img from "../../../img/payment.png";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 420px;
  padding: 24px 24px 34px 24px;
  border-radius: 30px;
  background: var(
    --black-gradient,
    radial-gradient(98.96% 98.96% at 50% 0%, #232a34 0%, #181e27 100%)
  );
`;
const Span = styled.span`
  color: var(--Orange, #fc7614);
  text-align: center;
  font-size: 15px;
  line-height: 22px;
  border-radius: 22.5px;
  background: var(--Dark-Blue, #262e38);
  padding: 4px 19px;
  margin: 32px 0;
`;
const Title = styled.h1`
  color: #fff;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 7px;
`;
const Text = styled.p`
  color: var(--Light-Grey, #969fad);
  font-size: 15px;
  line-height: 24px;  
`;
function Result(props) {
  return (
    <Wrapper>
      <img src={img} alt="img" />
      <Span>You selected {props.number} out 5</Span>
      <Title>Thank you</Title>
      <Text>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </Text>
    </Wrapper>
  );
}

export default Result;
