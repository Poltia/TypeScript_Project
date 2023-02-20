// Email 정규식 확인 함수
export const checkEmail = (input: string) => {
  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (emailRegex.test(input)) return true;
  return false;
  // return emailRegex.test(input) ? true : false;
};
