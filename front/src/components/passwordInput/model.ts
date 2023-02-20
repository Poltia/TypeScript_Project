/**
 * 8자 이상, 영문과 숫자 조합인지 확인
 * @param {string} input
 * @returns {boolean}
 */
export const checkReg = (input: string) => {
  const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  if (regex.test(input)) return true;
  return false;
};
