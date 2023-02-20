import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PwInput from "../../components/passwordInput";
import ValidateInput from "../../components/validateInput";
import { checkEmail } from "./model";
import { LoginContainer } from "./styles";

const Login = () => {
  // hook 할당
  const nav = useNavigate();

  // email input 할당할 변수
  const [email, setEmail] = useState("");
  // password input 할당할 변수
  const [password, setPassword] = useState("");

  return (
    <LoginContainer>
      <ValidateInput
        title={"이메일"}
        input={email}
        setInput={setEmail}
        placeholder={"이메일 주소를 입력해주세요"}
        validateCallback={[checkEmail]}
        errorLabel={"이메일 형식에 맞춰 입력해주세요"}
      />
      <PwInput
        title={"비밀번호"}
        setInput={setPassword}
        placeholder={"8자 이상, 영문 숫자 조합"}
      />
    </LoginContainer>
  );
};

export default Login;
