import React, { useEffect, useState } from "react";
import { checkReg } from "./model";
import {
  PasswordContainerDiv,
  EyeCloseIcon,
  EyeIcon,
  PasswordInput,
  PasswordInputWrapDiv,
  PasswordValidateLabel,
} from "./styles";
import { useDispatch } from "react-redux";
import { validatePassword } from "@/store/reducers/validateReducer";

// input props의 type 선언
interface IinputProps {
  title: string;
  placeholder: string;
  setInput: Function;
}

const PwInput: React.FC<IinputProps> = ({ title, placeholder, setInput }) => {
  // hook 할당
  const dispatch = useDispatch();

  // input 값을 담을 변수
  const [value, setValue] = useState("");
  // validate를 통과했는지 보여줄 변수
  const [regPass, setRegPass] = useState(false);

  // props로 받은 setInput에 값 넣기
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value); // 내부사용
    setInput(event.target.value); // 외부사용
  };

  // input > type 에 passowrd/text 토글 설정
  const [isEyeOpen, setIsEyeOpen] = useState(true);
  const eyeHandler = () => setIsEyeOpen(!isEyeOpen);

  // input value 의 lifecycle
  useEffect(() => {
    if (value === "") setRegPass(true);
    else if (checkReg(value)) setRegPass(true);
    else setRegPass(false);
  }, [value]);

  // validate reducer로 값을 보내는 lifecycle
  useEffect(() => {
    if (regPass) dispatch(validatePassword(true));
    else dispatch(validatePassword(false));
  }, [regPass]);

  return (
    <PasswordContainerDiv>
      {/* TITLE */}
      <label style={{ fontSize: "20px" }}>{title}</label>

      {/* INPUT WRAP */}
      <PasswordInputWrapDiv>
        {/* INPUT */}
        <PasswordInput
          type={isEyeOpen ? "password" : "text"}
          onChange={inputHandler}
          placeholder={placeholder}
        />

        {/* PASSWORD SHOW/HIDE TOGGLE */}
        {isEyeOpen ? (
          <div onClick={eyeHandler}>
            <EyeIcon>비밀번호 표시</EyeIcon>
          </div>
        ) : (
          <div onClick={eyeHandler}>
            <EyeCloseIcon>비밀번호 숨김</EyeCloseIcon>
          </div>
        )}
      </PasswordInputWrapDiv>

      {/* VALIDATE */}
      {!regPass && (
        <PasswordValidateLabel checkValidate={regPass}>
          {"최소 8자 이상, 영문 숫자 조합"}
        </PasswordValidateLabel>
      )}
    </PasswordContainerDiv>
  );
};

export default PwInput;
