import { HeaderContentsWrapDiv, HeaderContainer } from "./styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  INCOME_PATH,
  LOGIN_PATH,
  SPENDING_PATH,
  TRANSFER_PATH,
} from "@/constants/pathConstant";

const Header = () => {
  // hook 할당
  const nav = useNavigate();

  return (
    <HeaderContainer>
      <HeaderContentsWrapDiv>
        <div onClick={() => nav(SPENDING_PATH)}>지출</div>
        <div onClick={() => nav(INCOME_PATH)}>수입</div>
        <div onClick={() => nav(TRANSFER_PATH)}>이체</div>
        <div>닉네임</div>
        <div onClick={() => nav(LOGIN_PATH)}>로그아웃</div>
      </HeaderContentsWrapDiv>
    </HeaderContainer>
  );
};

export default Header;
