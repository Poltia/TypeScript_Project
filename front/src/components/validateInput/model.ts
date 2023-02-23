import { CHAR_LENGTH_8 } from "@/constants/loginConstant";

// 빈칸인지 확인하는 함수
export const checkBlank = (input: string) => {
  if (!!input) return true;
  return false;
};

// Email 정규식 확인 함수
export const checkEmail = (input: string) => {
  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (emailRegex.test(input)) return true;
  return false;
  // return emailRegex.test(input) ? true : false;
};

// 전화번호 정규식 확인 함수
export const checkPhoneNumber = (input: string) => {
  const cellPhoneRegex = /^[a-z|A-Z|0-9|]+$/;
  const telephoneRegex = /^\d{2,3}-\d{3,4}-\d{4}$/;
  if (cellPhoneRegex.test(input) || telephoneRegex.test(input)) return true;
  return false;
};

// 최소 글자수 확인 함수
export const checkAtLeastLength = (
  input: string,
  atLeastLength = CHAR_LENGTH_8
) => {
  if (input.length < atLeastLength) return false;
  return true;
};
