import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { validateText } from "../../store/reducers/validateReducer";
import {
  ValidateContainerDiv,
  ValidatedInput,
  ValidateErrorLabel,
  ValidateInputWrapDiv,
  CancelAll,
} from "./styles";

// input props의 type 선언
interface IinputProps {
  title: string;
  input: string;
  setInput: Function;
  placeholder: string;
  validateCallback: Function[];
  errorLabel: string;
}

const ValidateInput: React.FC<IinputProps> = ({
  title,
  input,
  setInput,
  placeholder,
  validateCallback,
  errorLabel,
}) => {
  // hook 할당
  const dispatch = useDispatch();

  // 정규식 통과여부 확인 변수
  const [pass, setPass] = useState(true);

  // input값 할당할 함수
  const inputHandler = (e: any) => {
    setInput(e.target.value);
  };

  // input value의 lifecycle
  useEffect(() => {
    // input값이 없으면 에러문구 띄우지 않기 위한 구문
    if (!input) return setPass(true);

    // 정규식 검증하기위한 구문
    const validateResults = validateCallback.reduce(
      (prev: Array<Function>, curr: Function) =>
        curr(input) ? prev.concat(curr(input)) : prev,
      []
    );
    if (
      !validateResults.length &&
      validateResults.every((result: object) => result)
    )
      setPass(false);
    else setPass(true);
  }, [input]);

  // validate reducer에 값을 보내는 lifecycle
  useEffect(() => {
    dispatch(validateText(pass));
  }, [pass]);

  return (
    <ValidateContainerDiv>
      <label style={{ fontSize: "4.5rem" }}>{title}</label>
      <ValidateInputWrapDiv>
        <ValidatedInput
          placeholder={placeholder}
          onChange={inputHandler}
          value={input || ""}
        />
        {input ? (
          <CancelAll
            onClick={() => {
              setInput("");
            }}
          />
        ) : (
          <></>
        )}
      </ValidateInputWrapDiv>
      <ValidateErrorLabel checkValidate={pass}>{errorLabel}</ValidateErrorLabel>
    </ValidateContainerDiv>
  );
};

export default ValidateInput;
