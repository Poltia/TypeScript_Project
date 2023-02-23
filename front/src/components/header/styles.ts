import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  height: 10vh;
  border-bottom: 1px solid black;
`;

export const HeaderContentsWrapDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  & > div {
    width: 20%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
