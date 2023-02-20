import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  height: 10vh;
  border-bottom: 1px solid black;
`;

export const LoginWrapDiv = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > div {
    width: 45%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentsWrapDiv = styled.div`
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
