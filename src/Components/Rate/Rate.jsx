import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 420px;
  padding: 24px 24px 34px 24px;
  border-radius: 30px;
  background: var(
    --black-gradient,
    radial-gradient(98.96% 98.96% at 50% 0%, #232a34 0%, #181e27 100%)
  );
`;
const StarImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #262e38;
`;
const Title = styled.h1`
  color: var(--Pure-White, #fff);
  font-size: 28px;
  font-weight: 700;
  margin: 18px 0 10px 0;
`;
const Paragrap = styled.p`
  display: flex;
  align-items: flex-start;
  text-align: left;
  color: var(--Light-Grey, #969fad);
  line-height: 22px;
  font-size: 15px;
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 32px 0;
`;
const NambersButton = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;
  background-color: var(--Dark-Blue, #262e38);
  color: var(--Medium-Gray, #7c8798);
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  border-radius: 22.5px;
  background: var(--Orange, #fc7614);
  width: 100%;
  height: 45px;
  border-radius: 20px;
  border: none;
  color: var(--Pure-White, #fff);
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
`;
function Rate() {
  const stars = [1, 2, 3, 4, 5];
  return (
    <Wrapper>
      <StarImg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
        >
          <path
            d="M9.06688 0.429953L11.0567 4.46137C11.1691 4.68909 11.3864 4.84692 11.6377 4.88341L16.0866 5.52998C16.3773 5.5722 16.6188 5.77583 16.7095 6.05523C16.8002 6.33463 16.7244 6.64131 16.514 6.84627L13.2943 9.98421C13.1122 10.1617 13.0296 10.4171 13.0721 10.667L13.8321 15.0981C13.8816 15.3876 13.7626 15.6801 13.525 15.8527C13.2874 16.0253 12.9724 16.048 12.7125 15.9114L8.73279 13.8189C8.50789 13.7009 8.23937 13.7009 8.01447 13.8189L4.03475 15.9114C3.77481 16.048 3.45984 16.0253 3.22224 15.8527C2.98464 15.6801 2.86562 15.3876 2.91521 15.0981L3.6752 10.667C3.71815 10.4167 3.63503 10.1613 3.45299 9.98421L0.233258 6.84627C0.022814 6.64131 -0.0529846 6.33463 0.0377459 6.05523C0.128477 5.77583 0.369993 5.5722 0.660704 5.52998L5.10953 4.88341C5.36085 4.84692 5.57812 4.68909 5.69052 4.46137L7.68038 0.429953C7.96586 -0.143318 8.78372 -0.143318 9.06688 0.429953Z"
            fill="#FC7614"
          />
        </svg>
      </StarImg>
      <Title>How did we do?</Title>
      <Paragrap>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Paragrap>
      <ButtonContainer>
        {stars.map((item) => {
          return <NambersButton>{item}</NambersButton>;
        })}
      </ButtonContainer>

      <SubmitButton>submit</SubmitButton>
    </Wrapper>
  );
}

export default Rate;
