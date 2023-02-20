import styled from "styled-components";

export const FooterContainer = styled.div`
border-top: 1px solid black;
  width: 100%;
  height: 10vh;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;

  & > div {
    width: 25%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
