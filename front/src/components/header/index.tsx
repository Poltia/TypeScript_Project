import { ContentsWrapDiv, HeaderContainer, LoginWrapDiv } from "./styles";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  // hook 할당
  const nav = useNavigate();

  return (
    <HeaderContainer>
      <ContentsWrapDiv>
        <div>지출</div>
        <div>수입</div>
        <div>이체</div>
        <div>닉네임</div>
        <div onClick={() => nav("/")}>로그아웃</div>
      </ContentsWrapDiv>
    </HeaderContainer>
  );
};

export default Header;
